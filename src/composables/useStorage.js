import {ref,watchEffect} from 'vue'
import {depo,veritabani,tarih} from '../firebase/config'

const useStorage=(dosya)=>{
    const error=ref(null);
    const url=ref(null);
    const progress=ref(null);
    watchEffect(()=>{
        const storageRef=depo.ref('resimler/'+dosya.name);
        const collectionRef=veritabani.collection('resimler')
        //karşı tarafa dosya gönderildiğinde teikleme işlemi yapılmaktadır
        storageRef.put(dosya).on('state_changed',(snap)=>{
            //console.log(snap);
            //gönderilen byte ile total byte yüzelik ile hesaplanma kısmı
            let yuzdelik=(snap.bytesTransferred/snap.totalBytes)*100;
            progress.value=yuzdelik;
            console.log(progress.value);
        },(err)=>{
            error.value=err;
        },async()=>{
            const dlUrl=await storageRef.getDownloadURL();
            const olusturulmaTarihi=tarih();
            await collectionRef.add({
                url:dlUrl,
                olusturulmaTarihi
            })
            url.value=dlUrl;
        })
    })
    return {url,error,progress}
}

export default useStorage;