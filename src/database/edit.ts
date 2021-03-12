import { IWords } from '../types/IWords';
import { wordsCollection } from './core';

export const editHotel = (words: IWords) => {
  wordsCollection.doc(words.id).set({
    engword: words.engword,
    plword: words.plword,
  });
};
