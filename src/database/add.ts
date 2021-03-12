import { IWordsFirebase } from '../types/IWordsFirebase';
import { wordsCollection } from './core';

export const addWords = (words: IWordsFirebase) => {
  wordsCollection.add({
    engword: words.engword,
    plword: words.plword,
  });
};
