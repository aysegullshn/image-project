import {ref} from 'vue';
import { veritabani } from '../firebase/config';

const useCollection=(k)=>{
    const belgeler=ref(null)
    const hata=ref(null)

    let collectionRef=veritabani.collection(k).orderBy('olusturulmaTarihi','desc');

    //belgelere bir tünel açılır. uygulama ile firebase arasında köprü görevi görür(onSnapshot)
    collectionRef.onSnapshot(snap=>{
        let sonuclar=[];
        snap.docs.forEach(doc=>{
            sonuclar.push({...doc.data(),doc:doc.id})
        })
        belgeler.value=sonuclar;
        hata.value=null;
    },err=>{
        belgeler.value=null;
        hata.value=err.message;
    })

    return {hata,belgeler}
}

export default useCollection;