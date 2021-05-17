import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyDRuP6sK5DDOTdAn-4S_C-sKQ7Cet6vHr0",
  authDomain: "react-chart-ba69f.firebaseapp.com",
  projectId: "react-chart-ba69f",
  storageBucket: "react-chart-ba69f.appspot.com",
  messagingSenderId: "4680500660",
  appId: "1:4680500660:web:95c97e210ebb5b2d3e9ee1",
  measurementId: "G-6R6FZ7JVHP"
};

firebase.initializeApp(config);

export default firebase.firestore();
// Don’t forget to export firebase.firestore.Firestore service with firebase.firestore().