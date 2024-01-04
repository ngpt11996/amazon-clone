import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVG6bAsVwncY2Oi9sbz4k1MaAg38duz2g",
  authDomain: "challenge-64265.firebaseapp.com",
  projectId: "challenge-64265",
  storageBucket: "challenge-64265.appspot.com",
  messagingSenderId: "308355708734",
  appId: "1:308355708734:web:239d7dde749c89a8221e6f",
  measurementId: "G-CR00F0910L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export default {db,auth};