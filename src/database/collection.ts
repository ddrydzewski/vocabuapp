import firebase from "firebase";
import { IWordsFirebase } from "../types/IWordsFirebase";
import { getDate } from "../utilts/getDate";
import { firestoreDB } from "./core";

export const getCollection = async (userID: string) => {
  const helpWordsColletion = () => {
    return getWordsCollection(userID);
  };
  return await checkExistsCollection(userID).then(helpWordsColletion);
};

const checkExistsCollection = async (userID: string) => {
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

const getWordsCollection = async (userID: string) => {
  return firestoreDB
    .collection("userData")
    .doc(userID)
    .collection(
      "userWords"
    ) as firebase.firestore.CollectionReference<IWordsFirebase>;
};