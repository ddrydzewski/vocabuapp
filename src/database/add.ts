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
        original: words.original,
        translation: words.translation,
        category: words.category,
        level: words.level,
        note: words.note,
      })
    : console.log("add words error");
};
