import { IULevel } from "../../types/IULevel";

export const checkCurrentULevels = (
  currentULevel: IULevel,
  currentCheckbox: string
) => {
  let result = false;

  switch (currentCheckbox) {
    case "1": {
      if (
        currentULevel.first === true &&
        currentULevel.second === false &&
        currentULevel.third === false
      )
        result = true;
      break;
    }
    case "2": {
      if (
        currentULevel.first === false &&
        currentULevel.second === true &&
        currentULevel.third === false
      )
        result = true;

      break;
    }
    case "3": {
      if (
        currentULevel.first === false &&
        currentULevel.second === false &&
        currentULevel.third === true
      )
        result = true;

      break;
    }
    default: {
      throw new Error(`Unhandled action type: ${currentULevel}`);
    }
  }

  return result;
};
