// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDWqf5cmCMaHc-mXL3M-ddUzugawdJtwUY",
    authDomain: "disscuss-v0001.firebaseapp.com",
    projectId: "disscuss-v0001",
    storageBucket: "disscuss-v0001.appspot.com",
    messagingSenderId: "407981786711",
    appId: "1:407981786711:web:110e38c65da62cf1fec512",
    measurementId: "G-9FSC14BD37"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
