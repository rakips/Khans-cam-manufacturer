// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNAulf3KO4-NcYymSddUInfdn5rFIaK6g",
    authDomain: "khans-cam.firebaseapp.com",
    projectId: "khans-cam",
    storageBucket: "khans-cam.appspot.com",
    messagingSenderId: "566830999649",
    appId: "1:566830999649:web:bd720e46c1f30a045e6220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;