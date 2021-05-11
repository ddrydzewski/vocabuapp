import firebase from "firebase";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const deleteWords = (
  id: string,
  wordsCollection:
    | firebase.firestore.CollectionReference<IWordsFirebase>
    | undefined
) => {
  wordsCollection
    ? wordsCollection.doc(id).delete()
    : console.log("delete words error");
};
