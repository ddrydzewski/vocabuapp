import { IULevel } from "../../types/IULevel";
import { IWords } from "../../types/IWords";

export const getWordsFromULevel = (currentWords: IWords[], UL: IULevel) => {
  const wordsFromULevel: IWords[] = [];
  let allLevels: boolean = true;

  if (UL.first === false || UL.second === false || UL.third === false) {
    currentWords.forEach((val) => {
      if (checkULevel(val, UL)) wordsFromULevel.push(val);
    });
    allLevels = false;
  }

  return allLevels ? currentWords : wordsFromULevel;
};

const checkULevel = (val: IWords, ULevels: IULevel) => {
  let result: boolean = false;
  switch (val.level) {
    case "1": {
      if (ULevels.first === true) {
        result = true;
      }
      break;
    }
    case "2": {
      if (ULevels.second === true) {
        result = true;
      }
      break;
    }
    case "3": {
      if (ULevels.third === true) {
        result = true;
      }
      break;
    }
    default: {
      result = true;
    }
  }

  return result;
};
