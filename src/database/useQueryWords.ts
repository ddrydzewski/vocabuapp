import firebase from "firebase";
import { IWords } from "../types/IWords";
import { IWordsFirebase } from "../types/IWordsFirebase";

export const useQueryWords = async (
  wordsCollection: firebase.firestore.CollectionReference<IWordsFirebase>
) => {
  const result: IWords[] = [];
  wordsCollection.onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
      const item = doc.data();
      const word = { ...item, id: doc.id };
      result.push(word);
    });
  });
  return result;
};
