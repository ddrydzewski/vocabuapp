import firebase from "firebase";
import { IWords } from "../types/IWords";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const updateULevel = (
  words: IWords,
  ulevel: string,
  wordsCollection:
    | firebase.firestore.CollectionReference<IWordsFirebase>
    | undefined
) => {
  wordsCollection
    ? wordsCollection.doc(words.id).set({
        ...words,
        level: ulevel
      })
    : console.log("edit uLevel error");
};
