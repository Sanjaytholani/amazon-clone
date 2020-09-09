import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCORaCbtkoyxa4ZCZSScWWATqkNsLXvZgk",
  authDomain: "clone-e7542.firebaseapp.com",
  databaseURL: "https://clone-e7542.firebaseio.com",
  projectId: "clone-e7542",
  storageBucket: "clone-e7542.appspot.com",
  messagingSenderId: "562777751799",
  appId: "1:562777751799:web:c90d5c10fbab32859193f2",
  measurementId: "G-CPBZQK6DWW",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
