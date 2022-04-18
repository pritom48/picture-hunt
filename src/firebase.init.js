// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5VOYgSae11EnqPui4BVtgLmveR1RCKJw",
    authDomain: "photo-hunter-cb937.firebaseapp.com",
    projectId: "photo-hunter-cb937",
    storageBucket: "photo-hunter-cb937.appspot.com",
    messagingSenderId: "764873888503",
    appId: "1:764873888503:web:0306928322a124bc8239f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;