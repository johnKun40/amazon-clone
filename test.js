import firebase from "firebase/compat";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firebase.collection('users').doc('0ga6chdIAeNebBd9kPcv').collection('itemCard').doc('WVISawlPnM8OvjR2PR2C');

//another method of quering firebase database

//firebase.doc('/users/******/itemCard/*********')