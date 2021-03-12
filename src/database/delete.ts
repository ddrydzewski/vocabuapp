import { wordsCollection } from './core';

export const deleteWords = (id: string) => {
  wordsCollection.doc(id).delete();
};
