// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6zVLnJIz4tQM0_req7pb-YPRe6U0-iC8",
  authDomain: "assignment10-da978.firebaseapp.com",
  projectId: "assignment10-da978",
  storageBucket: "assignment10-da978.appspot.com",
  messagingSenderId: "414486011201",
  appId: "1:414486011201:web:8ffac2de201cab8c7355c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 export default auth;