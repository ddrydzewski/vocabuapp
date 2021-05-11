import firebase from "firebase";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const addWords = (
  words: IWordsFirebase,
  wordsCollection:
    | firebase.firestore.CollectionReference<IWordsFirebase>
    | undefined
) => {
  wordsCollection
    ? wordsCollection.add({
        engword: words.engword,
        plword: words.plword,
      })
    : console.log("add words error");
};
