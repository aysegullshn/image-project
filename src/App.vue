<template>
  <div class="App">
    <Title/>
    <Upload/>
    <ImageGrid @secilen="secilenResimGuncelle"/>
    <Modal v-if="secilenResim" :imgUrl="secilenResim" @kapat="secilenResimGuncelle"/>
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import Upload from './components/Upload'
import Modal from './components/Modal'
import {ref} from 'vue'
export default {
  name: 'App',
  components:{
    ImageGrid,
    Title,
    Upload,
    Modal
  },
  setup(){
    const secilenResim=ref(null)

    const secilenResimGuncelle=(url)=>{
      secilenResim.value=url
    }
    return {secilenResim,secilenResimGuncelle}
  }
}
</script>

<style>

</style>
