
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA3K_ruCkvoHpaNCCdty08Do_JfGFKvYo",
  authDomain: "color-generator-77566.firebaseapp.com",
  projectId: "color-generator-77566",
  storageBucket: "color-generator-77566.appspot.com",
  messagingSenderId: "624929119536",
  appId: "1:624929119536:web:d30dee1602f14cab3d3cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;