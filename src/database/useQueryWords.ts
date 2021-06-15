import { useEffect, useState } from "react";
import { useAppState } from "../context/state";
import { IWords } from "../types/IWords";

export const useQueryWords = () => {
  const { wordsCollection } = useAppState();
  const [words, setWords] = useState<IWords[]>([]);

  useEffect(() => { 
    wordsCollection && wordsCollection.onSnapshot(snapshot => {
      const result: IWords[] = [];
      snapshot.forEach((doc) => {
        const item = doc.data();
        const word = { ...item, id: doc.id };
        result.push(word);
      });
      setWords(result);
    });
  }, [wordsCollection]);

  return words;
};
