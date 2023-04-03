// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: 'menu-app-8752e.firebaseapp.com',
  projectId: 'menu-app-8752e',
  storageBucket: 'menu-app-8752e.appspot.com',
  messagingSenderId: '804126644067',
  appId: '1:804126644067:web:96ea6a84024ca59ea9a556'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
