import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCY0VX9RFV-zZdLqH3ZZllJk1vk12OnPtA",
    authDomain: "fun-plus-human-resources.firebaseapp.com",
    projectId: "fun-plus-human-resources",
    storageBucket: "fun-plus-human-resources.appspot.com",
    messagingSenderId: "174027192932",
    appId: "1:174027192932:web:80fff490f575dda48cbd71",
    measurementId: "G-EG5TN8109W"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);