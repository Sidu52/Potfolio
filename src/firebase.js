// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_API_KEY,
    // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_PROJECT_ID,
    // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    // appId: import.meta.env.VITE_APP_ID,
    // measurementId: import.meta.env.VITE_MEASURE_MENT_ID

    apiKey: "AIzaSyDEpJGM_3Sgc1qdzmdYvHHxR6-m1ouacM8",
    authDomain: "potfolio-review.firebaseapp.com",
    projectId: "potfolio-review",
    storageBucket: "potfolio-review.appspot.com",
    messagingSenderId: "1029537251099",
    appId: "1:1029537251099:web:0c1bbfe07852fe88771dbe",
    measurementId: "G-7WVSQSYGLB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);