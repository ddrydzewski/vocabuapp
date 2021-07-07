import { IWords } from "../../types/IWords";

export const checkDuplicate = (words: IWords[], newWord: string): boolean => {
  let exist = false;
  words.forEach((element) => {
    if (element.original === newWord) exist = true;
  });
  return exist;
};
