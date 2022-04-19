// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJOiUq_AkI0VQE0OC9efU3S4hFnUjngxc",
  authDomain: "assignment-10-b8408.firebaseapp.com",
  projectId: "assignment-10-b8408",
  storageBucket: "assignment-10-b8408.appspot.com",
  messagingSenderId: "486001972316",
  appId: "1:486001972316:web:e95a467e6e2993984e0299",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
