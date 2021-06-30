import { IWords } from "../../types/IWords";

export const getWordsFromCategory = (words: IWords[], category: string) => {
  const wordsFromCategory: IWords[] = [];

  if (category !== "all") {
    words.forEach((val) => {
      if (val.category === category) {
        wordsFromCategory.push(val);
      }
    });
  }

  return category !== "all" ? wordsFromCategory : words;
};
