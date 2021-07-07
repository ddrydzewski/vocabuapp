import { IWordsFirebase } from "../../types/IWordsFirebase";

export const checkMinLength = (card: IWordsFirebase) => {
  let result = true;
  if (
    card.original.length <= 0 ||
    card.translation.length <= 0 ||
    card.category.length <= 0
  )
    result = false;
  return result;
};
