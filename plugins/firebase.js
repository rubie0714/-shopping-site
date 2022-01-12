// ~/plugins/firebase.js


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAReX3MJEXyLFDR3433_SrSaSdlv11k5pc",
    authDomain: "shopping-site-2cc73.firebaseapp.com",
    projectId: "shopping-site-2cc73",
    storageBucket: "shopping-site-2cc73.appspot.com",
    messagingSenderId: "266128045473",
    appId: "1:266128045473:web:139bc2d591b7d6ff9b87e0",
    measurementId: "G-28L7S3RM0W"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''


export const db = firebase.firestore();