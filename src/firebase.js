import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLZtWd8hXEHbLOIwPVRZPKxCzUYhc0yGc",
    authDomain: "fastqueue-19d11.firebaseapp.com",
    databaseURL: "https://fastqueue-19d11.firebaseio.com",
    projectId: "fastqueue-19d11",
    storageBucket: "fastqueue-19d11.appspot.com",
    messagingSenderId: "539591412878",
    appId: "1:539591412878:web:575afa8134a7735a"
});

export const db = firebaseApp.firestore();