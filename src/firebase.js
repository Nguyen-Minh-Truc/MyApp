// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsi22rraqg0HnTsl8JYcO-dmf_dVA-Ukg",
  authDomain: "datamyweb-4958c.firebaseapp.com",
  databaseURL: "https://datamyweb-4958c-default-rtdb.firebaseio.com",
  projectId: "datamyweb-4958c",
  storageBucket: "datamyweb-4958c.appspot.com",
  messagingSenderId: "204124496487",
  appId: "1:204124496487:web:5d58899ea24d475dd5aac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default { app };
