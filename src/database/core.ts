import firebase from "firebase";
import { firebaseConfig } from "../config/firebase";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestoreDB = firebaseApp.firestore();
