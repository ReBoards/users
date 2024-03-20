// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2eOSQOLPkF4cLhhJYT9Frsxga6yCvBoc",
  authDomain: "reboard32200.firebaseapp.com",
  projectId: "reboard32200",
  storageBucket: "reboard32200.appspot.com",
  messagingSenderId: "172435182545",
  appId: "1:172435182545:web:e780f39081d6208a7ec6f0",
  measurementId: "G-YFP5QY3MTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);