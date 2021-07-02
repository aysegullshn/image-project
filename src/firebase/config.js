import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRG90Ki3YJK6r1kRvDBdGRsiu-jfCLrTg",
    authDomain: "image-vue3.firebaseapp.com",
    projectId: "image-vue3",
    storageBucket: "image-vue3.appspot.com",
    messagingSenderId: "262341402825",
    appId: "1:262341402825:web:6dd0b650c3e1649971ed18"
  };

  firebase.initializeApp(firebaseConfig);

  const depo=firebase.storage();
  const veritabani=firebase.firestore();

  const tarih=firebase.firestore.FieldValue.serverTimestamp;
  export {depo,veritabani,tarih}