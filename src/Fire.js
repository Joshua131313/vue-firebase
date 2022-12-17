import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const  firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAszSIHt1l5XNyg1OSOEuJlAws1gMgVOms",
    authDomain: "ecommerce-vue-e4573.firebaseapp.com",
    projectId: "ecommerce-vue-e4573",
    storageBucket: "ecommerce-vue-e4573.appspot.com",
    messagingSenderId: "320080471434",
    appId: "1:320080471434:web:62ea949a588f1b051b1473",
    measurementId: "G-EDXD69ETNB"
});

const db = firebaseApp.firestore()
const auth = firebase.auth();
const Fire = firebaseApp

export  {db, Fire, auth}