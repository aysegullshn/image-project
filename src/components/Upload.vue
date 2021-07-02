<template>
    <form>
        <label>
            <input type="file" @change="dosyaYukle"/>
            <span><i class="fas fa-upload"></i>Resim Yükle</span>
        </label>
        <div class="output">
            <div v-if="dosyaHatasi" class="error">
                {{dosyaHatasi}}
            </div>
            <div v-if="dosya">
                {{dosya.name}}
            </div>
            <ProgressBar v-if="dosya" :file="dosya" @tamamlandi="dosya=null"/>
        </div>
    </form>
</template>

<script>
import {ref} from 'vue'
import ProgressBar from './ProgressBar'
    export default {
        components:{ProgressBar},
        setup(){

            const dosya=ref('');
            const dosyaHatasi=ref('');
            const tipler=['image/png','image/jpeg'];
            const dosyaYukle=(e)=>{
               // console.log(e);
               //dosya içeriğine erişim yapılacak kısım
               let secilen=e.target.files[0];
               //console.log(secilen);

               if(secilen && tipler.includes(secilen.type)){
                   dosya.value=secilen;
                   dosyaHatasi.value=null;
               }
               else{
                   dosya.value=null;
                   dosyaHatasi.value="Lütfen bir seçim dosyası seçiniz..(png ya da jpeg)"
               }
            }
            return {dosyaYukle,dosya,dosyaHatasi}
        }
    }
</script>

<style>
    form{
        margin: 30px auto 10px;
        text-align: center;
    }
    label input{
        height: 0;
        width: 0;
        opacity: 0;
    }
    label{
        display: block;
        width: 150px;
        height: 30px;
        background-color: var(--secondary);
        border: 1px solid var(--secondary);
        border-radius: 6px;
        margin: 10px auto;
        line-height: 30px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    label:hover{
        background: #2f3542;
        color: white;
        border: 1px solid var(--secondary);
    }
    .output{
        height: 40px;
        font-size: 0.8rem;
    }
    .error{
        color: var(--error);
    }
</style>