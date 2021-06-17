import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3dmh0HAHGWtPOjUZm0V7sY3otJ3j3kiI",
    authDomain: "netflix-clone-826c1.firebaseapp.com",
    projectId: "netflix-clone-826c1",
    storageBucket: "netflix-clone-826c1.appspot.com",
    messagingSenderId: "455701015165",
    appId: "1:455701015165:web:eb069965d471cd9d7fdf14"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;