import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmfXDhjaSN70BWHOzzL6lMR5YihEC75bE",
  authDomain: "tagging-cbe36.firebaseapp.com",
  projectId: "tagging-cbe36",
  storageBucket: "tagging-cbe36.appspot.com",
  messagingSenderId: "341601215351",
  appId: "1:341601215351:web:e820dc21e87cbbc64df772",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export interface charCoordinates {
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
}

export async function getCharData(name: string) {
  const charData = await getDoc(doc(firestore, "characters", name));
  return charData.data() as charCoordinates;
}

export async function addScore(
  name: string = "Anonymous",
  collectionName: string,
  time: number
) {
  await addDoc(collection(firestore, collectionName), {
    name: name,
    time: time,
  });
}
