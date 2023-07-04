import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBduFFL0U7LAbLQcHFDhacOzAeAy4KeX3o",
  authDomain: "uber-eats-pooja.firebaseapp.com",
  projectId: "uber-eats-pooja",
  storageBucket: "uber-eats-pooja.appspot.com",
  messagingSenderId: "459330723211",
  appId: "1:459330723211:web:13d4ccad576747d8f7a38e",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
