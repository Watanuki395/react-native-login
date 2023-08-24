import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCSdpcvRRsJuWvozyYlJEPtOMQV1WgQqVY",
    authDomain: "elerningtool.firebaseapp.com",
    projectId: "elerningtool",
    storageBucket: "elerningtool.appspot.com",
    messagingSenderId: "1069043666777",
    appId: "1:1069043666777:web:2b071f20817e9ad0854648",
    measurementId: "G-322S2ZBBV2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

