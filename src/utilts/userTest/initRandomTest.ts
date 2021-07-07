import { ITestWords } from "../../types/ITestWords";
import { IWords } from "../../types/IWords";

export const initRandomTest = (currentWords: IWords[], isTranslationMode: boolean) => {
  const randomArrayNumbers = getRandomNumbersArray(currentWords.length);
  const initTestArray: ITestWords[] = [];

  if (isTranslationMode) {
    randomArrayNumbers.map((val) =>
      initTestArray.push({
        base: currentWords[val].translation,
        correctAnswer: currentWords[val].original,
        note: currentWords[val].note,
      })
    );
  } else {
    randomArrayNumbers.map((val) =>
      initTestArray.push({
        base: currentWords[val].original,
        correctAnswer: currentWords[val].translation,
        note: currentWords[val].note,
      })
    );
  }

  return initTestArray;
};

const getRandomNumbersArray = (lengthOfArray: number) => {
  let currentIndex: number = lengthOfArray;
  const randomArray: number[] = [];

  for (let i = 0; i < lengthOfArray; i++) {
    randomArray.push(i);
  }

  while (0 !== currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [randomArray[currentIndex], randomArray[randomIndex]] = [
      randomArray[randomIndex],
      randomArray[currentIndex],
    ];
  }

  return randomArray;
};
