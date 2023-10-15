// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM4SbOfg1NmMhg0HZY_Z53I38CiYBf9Ac",
    authDomain: "glow-c95f2.firebaseapp.com",
    projectId: "glow-c95f2",
    storageBucket: "glow-c95f2.appspot.com",
    messagingSenderId: "240456938857",
    appId: "1:240456938857:web:0d266ea60408aaa42cf9f8"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;