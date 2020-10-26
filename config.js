import * as firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAiLHdbAXzGPr2OrtOa_Ete0WFCiVcQP1A",
    authDomain: "wily-app-f16f7.firebaseapp.com",
    databaseURL: "https://wily-app-f16f7.firebaseio.com",
    projectId: "wily-app-f16f7",
    storageBucket: "wily-app-f16f7.appspot.com",
    messagingSenderId: "343357146619",
    appId: "1:343357146619:web:162131083b5d9bbd5f775e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore;