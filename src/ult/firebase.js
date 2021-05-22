import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3aPnfbmvSYYcO4XzW23J4NaTCFuWGHqE",
  authDomain: "stockpe-682e7.firebaseapp.com",
  projectId: "stockpe-682e7",
  storageBucket: "stockpe-682e7.appspot.com",
  messagingSenderId: "302662723737",
  appId: "1:302662723737:web:9cbd67e5141d8a106af008",
  measurementId: "G-P435G7CH99"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;