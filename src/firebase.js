import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBV2PferLQ9dj0qkZxFEMCvp3hbfFmIpac",
    authDomain: "netflix-clone-660e8.firebaseapp.com",
    projectId: "netflix-clone-660e8",
    storageBucket: "netflix-clone-660e8.appspot.com",
    messagingSenderId: "134940102836",
    appId: "1:134940102836:web:b4a21764a607d9254207e1",
    measurementId: "G-71Y6GZN94P",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
