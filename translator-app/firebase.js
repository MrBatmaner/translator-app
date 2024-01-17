//import firebase from "../firebase";
//import * as firebase from "firebase/app";
//import firebase from "firebase/app";
//import "firebase/firestore";
//import "firebase/auth";
//import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4hMjrGkGUK0NFMIhuX1UT2FEK2QBMV10",
  authDomain: "translator-app-8f63e.firebaseapp.com",
  projectId: "translator-app-8f63e",
  storageBucket: "translator-app-8f63e.appspot.com",
  messagingSenderId: "465890069162",
  appId: "1:465890069162:web:bc769f84c77b48f72a1ed3",
};
//let app;
//if (firebaseConfig.app.length > 0) {
//app = firebase.initializeApp(firebaseConfig);
//} else {
//app = firebase.app();
//}

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export { db };
