// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChrPpT3fPxJMfRtOabEXZEfj9ScrQPR2E',
  authDomain: 'music-7f6aa.firebaseapp.com',
  projectId: 'music-7f6aa',
  storageBucket: 'music-7f6aa.appspot.com',
  messagingSenderId: '699219072831',
  appId: '1:699219072831:web:802266e7afaf7a4bb6a58a',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(error.code);
});

const userCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentCollection = db.collection('comments');

export {
  auth,
  db,
  userCollection,
  storage,
  songsCollection,
  commentCollection,
};
