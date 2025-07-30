// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// !! IMPORTANT !!: Replace with YOUR specific Firebase config from console
const firebaseConfig = {
  apiKey: "AIzaSyBy4sVfbfE-Dr0_foFRJAQIikf36eWhHyA",
  authDomain: "foodchain-d82ba.firebaseapp.com",
  projectId: "foodchain-d82ba",
  storageBucket: "foodchain-d82ba.firebasestorage.app",
  messagingSenderId: "612109441650",
  appId: "1:612109441650:web:06dcf6d79d643c2de2c0eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;