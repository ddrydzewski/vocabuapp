import firebase from "firebase";
import { IWords } from "../types/IWords";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const updateCategory = (
  words: IWords,
  wordsCollection:
    | firebase.firestore.CollectionReference<IWordsFirebase>
    | undefined
) => {
  wordsCollection
    ? wordsCollection.doc(words.id).set({
        ...words,
        category: words.category
      })
    : console.log("edit category error");
};
