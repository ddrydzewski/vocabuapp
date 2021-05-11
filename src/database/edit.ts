import firebase from "firebase";
import { IWords } from "../types/IWords";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const editWords = (
  words: IWords,
  wordsCollection:
    | firebase.firestore.CollectionReference<IWordsFirebase>
    | undefined
) => {
  wordsCollection
    ? wordsCollection.doc(words.id).set({
        engword: words.engword,
        plword: words.plword,
      })
    : console.log("edit words error");
};
