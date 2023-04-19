import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBkWUwbhMI4iAmLne1NkHNRWvY7lCb4gn0",
  authDomain: "sanket-portfolio-react-25707.firebaseapp.com",
  projectId: "sanket-portfolio-react-25707",
  storageBucket: "sanket-portfolio-react-25707.appspot.com",
  messagingSenderId: "106062632955",
  appId: "1:106062632955:web:bf40a22d350c4ed1065d5e",
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()