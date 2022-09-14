// Import the functions you need from the SDKs you need
//import firebase from 'firebase/app';
import 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAB6HekqBIiF3B0uYRJOQkvZ2HOuKidz64",
  authDomain: "trendy-t.firebaseapp.com",
  projectId: "trendy-t",
  storageBucket: "trendy-t.appspot.com",
  messagingSenderId: "595011099717",
  appId: "1:595011099717:web:67856b33c0027f409b972c",
  measurementId: "G-17K4GD7X6S"
};

getAnalytics.initializeApp(firebaseConfig);
const storage = getAnalytics.storage();
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(analytics);

export {
    storage,analytics as default
}

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB6HekqBIiF3B0uYRJOQkvZ2HOuKidz64",
  authDomain: "trendy-t.firebaseapp.com",
  projectId: "trendy-t",
  storageBucket: "trendy-t.appspot.com",
  messagingSenderId: "595011099717",
  appId: "1:595011099717:web:67856b33c0027f409b972c",
  measurementId: "G-17K4GD7X6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/