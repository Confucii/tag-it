import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmfXDhjaSN70BWHOzzL6lMR5YihEC75bE",
  authDomain: "tagging-cbe36.firebaseapp.com",
  projectId: "tagging-cbe36",
  storageBucket: "tagging-cbe36.appspot.com",
  messagingSenderId: "341601215351",
  appId: "1:341601215351:web:e820dc21e87cbbc64df772",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
