import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCy7SzI0Izs0mHIJBQ2b-pxdD6H_dhRHw4",
    authDomain: "test-login-56a6e.firebaseapp.com",
    projectId: "test-login-56a6e",
    storageBucket: "test-login-56a6e.appspot.com",
    messagingSenderId: "105538250463",
    appId: "1:105538250463:web:10b50ea0bdb085c5462b6a"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export const db = firebaseApp.firestore();
  export const usersCollection = db.collection('users')
  export const questionsCollection = db.collection('questions')
  export const auth = firebase.auth()
  //define methods to perform actions on firestore
  export const createUser = user=>{
    return usersCollection.add(user)
  }

  export const addQuestion = question=>{
    return questionsCollection.add(question)
  }
  
  export const getUser = user=>{
    console.log(user)
    return usersCollection
  }