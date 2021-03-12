import { IWords } from '../types/IWords';
import { wordsCollection } from './core';

export const editWords = (words: IWords) => {
  wordsCollection.doc(words.id).set({
    engword: words.engword,
    plword: words.plword,
  });
};
