import firebase from "firebase";
import { IWordsFirebase } from "../types/IWordsFirebase";
import { getDate } from "../utilts/getDate";
import { firebaseApp, firestoreDB } from "./core";

export const getCollection = async () => {
  const helpWordsColletion = () => {
    return getWordsCollection();
  };
  return await checkExistsCollection().then(helpWordsColletion);
};

const checkExistsCollection = async () => {
  const userID = firebaseApp.auth().currentUser?.uid;

  firestoreDB
    .collection("userData")
    .doc(userID)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        firestoreDB
          .collection("userData")
          .doc(userID)
          .set({ userWords: getDate() });
        firestoreDB
          .collection("userData")
          .doc(userID)
          .collection("userWords")
          .add({ engword: "hello", plword: "hejka" });
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

const getWordsCollection = async () => {
  const userID = firebaseApp.auth().currentUser?.uid;

  return firestoreDB
    .collection("userData")
    .doc(userID)
    .collection(
      "userWords"
    ) as firebase.firestore.CollectionReference<IWordsFirebase>;
};
