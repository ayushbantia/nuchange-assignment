// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOqZHpO46hp4cOez9wvHL3It9BsjicuKI",
  authDomain: "clone-fullstack-69087.firebaseapp.com",
  projectId: "clone-fullstack-69087",
  storageBucket: "clone-fullstack-69087.appspot.com",
  messagingSenderId: "763893927513",
  appId: "1:763893927513:web:8851aad235b883c923ab48",
  measurementId: "G-JVDS4E0Q5B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

console.log("Firebase >>>", firebase);
console.log("Firebase App >>>", firebaseApp);
console.log("Database >>>", db);
export { db, auth };
