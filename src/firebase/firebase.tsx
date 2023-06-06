import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
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

export interface scoreData {
  name: string;
  time: number;
}

export async function getCharData(name: string) {
  const charData = await getDoc(doc(firestore, "characters", name));
  return charData.data() as charCoordinates;
}

export async function getScores(id: number) {
  const scoreQuery = query(
    collection(firestore, `leaderboard_${id}`),
    orderBy("time", "asc")
  );
  const scoresDocs = await getDocs(scoreQuery);
  const scores = scoresDocs.docs.map((doc) => doc.data());
  return scores as scoreData[];
}

export async function addScore(
  name: string,
  collectionName: string,
  time: number
) {
  if (name === "") name = "Anonymous";
  await addDoc(collection(firestore, collectionName), {
    name: name,
    time: time,
  });
}
