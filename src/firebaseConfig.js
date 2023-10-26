// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAheW4F_YiBEbXoahi9tDk5phByr2wx_sw",
  authDomain: "student-connect-bdba3.firebaseapp.com",
  projectId: "student-connect-bdba3",
  storageBucket: "student-connect-bdba3.appspot.com",
  messagingSenderId: "479068692448",
  appId: "1:479068692448:web:96ddddf4af08a3e5d9d585",
  measurementId: "G-B7R7TL655S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
