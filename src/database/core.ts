import firebase from "firebase";
import { firebaseConfig } from "../config/firebase";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestoreDB = firebaseApp.firestore();
export const wordsCollection = firestoreDB.collection(
  "words"
) as firebase.firestore.CollectionReference<IWordsFirebase>;
