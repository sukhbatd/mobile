import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSQSlWNS7SgjlYVhM-K9Lr6pG98Efl-7c",
  authDomain: "test-4151e.firebaseapp.com",
  projectId: "test-4151e",
  storageBucket: "test-4151e.appspot.com",
  messagingSenderId: "860544133710",
  appId: "1:860544133710:web:d71be04f71e18b0f8e711f",
  measurementId: "G-7GWN21WWD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
