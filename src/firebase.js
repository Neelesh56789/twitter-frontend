import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWQJapSg1kYSuQ8U2RJsEB0LYmOx7lS3w",
    authDomain: "twitter-clone-52fac.firebaseapp.com",
    projectId: "twitter-clone-52fac",
    storageBucket: "twitter-clone-52fac.appspot.com",
    messagingSenderId: "258017215865",
    appId: "1:258017215865:web:7928089e7ba470861a9ba8",
    measurementId: "G-0LZTMTXQNR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;