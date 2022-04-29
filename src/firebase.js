// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHiZ0ettdccRCzVp6pdOos7ex8ROVuMio",
  authDomain: "cy-test-6afb3.firebaseapp.com",
  projectId: "cy-test-6afb3",
  storageBucket: "cy-test-6afb3.appspot.com",
  messagingSenderId: "764899383911",
  appId: "1:764899383911:web:b764a68687f3f8892412c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore database //lưu trữ CSDL
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
