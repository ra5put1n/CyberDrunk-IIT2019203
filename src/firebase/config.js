import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2P4O_eaopC5B9D73qEU9YAVoX21fAvsU",
    authDomain: "internship-portal-6784e.firebaseapp.com",
    projectId: "internship-portal-6784e",
    storageBucket: "internship-portal-6784e.appspot.com",
    messagingSenderId: "921488813144",
    appId: "1:921488813144:web:a99d9524ed6c8edb4d2e2d",
    measurementId: "G-Z96L0LSPPK"
  };


  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.serverTimestamp

  export {projectAuth, projectFirestore, timestamp }
  