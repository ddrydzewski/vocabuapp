import { wordsCollection } from './core';

export const deleteHotel = (id: string) => {
  wordsCollection.doc(id).delete();
};
