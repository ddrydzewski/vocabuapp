import { IWords } from "../../types/IWords";

export const getCategories = (words: IWords[]) => {
  const result: string[] = [];

  words.forEach((element) => {
    result.push(element.category);
  });
  const uniqueCategories = result.filter((v, i, a) => a.indexOf(v) === i);
  return uniqueCategories;
};
