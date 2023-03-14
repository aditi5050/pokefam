import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAKcVsH5KxT4hGUflKSOj8jYLGhkvaaUo",
  authDomain: "pokefam-3b8e0.firebaseapp.com",
  projectId: "pokefam-3b8e0",
  storageBucket: "pokefam-3b8e0.appspot.com",
  messagingSenderId: "829101326230",
  appId: "1:829101326230:web:73cc6fea403e12cfdae7b7",
  measurementId: "G-E495VPKXGB"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
