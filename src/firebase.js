//import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgj5SEWOw_J3radQ4nQ-LXriqL9Gg7TPU",
    authDomain: "clone-cab36.firebaseapp.com",
    projectId: "clone-cab36",
    storageBucket: "clone-cab36.appspot.com",
    messagingSenderId: "211467395261",
    appId: "1:211467395261:web:1de4ae087aecceba84d7d4",
    measurementId: "G-X7YFRED70M"
  };

export const createUserProfileDocument = async (userAuth , additionalInfo) => {
  //console.log('/users/'`${userAuth}`);
  
  //manual method
  // console.log(firebase.doc('/users/0ga6chdIAeNebBd9kPcv/itemCard/WVISawlPnM8OvjR2PR2C'));

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);



  //avoid repeating names and emails in the database
  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date();


    // set users data in the database
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch(error){
      console.log('Error creating user', error.message)
    }
  }

  return userRef;
}



//google log in authentication, sending data to firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({provider: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
