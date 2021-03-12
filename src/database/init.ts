import { useEffect, useState } from 'react';
import { IWords } from '../types/IWords';
import { wordsCollection } from './core';

export const useQueryWords = () => {
  const [words, setWords] = useState<IWords[]>([]);

  useEffect(() => {
    wordsCollection.onSnapshot(snapshot => {
      const result: IWords[] = [];
      snapshot.forEach(doc => {
        const item = doc.data();
        const word =  { ...item, id: doc.id };
        result.push(word);
      });
      setWords(result);
    });
  }, []);

  return { words };
};
