// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhr4mIaBX-stINtYSRSfklLgVCJJ-Q0k",
  authDomain: "dragon-news-db618.firebaseapp.com",
  projectId: "dragon-news-db618",
  storageBucket: "dragon-news-db618.firebasestorage.app",
  messagingSenderId: "162059291449",
  appId: "1:162059291449:web:8f7c715c505980ed1436e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;