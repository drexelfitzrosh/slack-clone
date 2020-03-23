import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'; 


const firebaseConfig = {
  apiKey: "AIzaSyDA3MO3d9v_9opuSR54HB9eTV8amDVSJjo",
  authDomain: "chat-app-e73c1.firebaseapp.com",
  databaseURL: "https://chat-app-e73c1.firebaseio.com",
  projectId: "chat-app-e73c1",
  storageBucket: "chat-app-e73c1.appspot.com/",
  messagingSenderId: "177873458842",
  appId: "1:177873458842:web:d7112972169cf3b080b123"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;