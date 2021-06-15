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
        original: words.original,
        translation: words.translation,
        category: words.category,
        level: words.level,
        note: words.note,
      })
    : console.log("edit words error");
};
