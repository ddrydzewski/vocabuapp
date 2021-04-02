import React, { useEffect, useState } from "react";
import { useAppState } from "../../../context/state";
import { getRandomIntNotTheSame } from "../../../utilts/getRandomIntNotTheSame";
import { RandomButton, RandomContainer, RandomWord } from "./style";

export const Random = () => {
  const { words } = useAppState();
  const [randomWord, setRandomWord] = useState("Random Word");
  const [lastNumber, setLastNumber] = useState(0);

  useEffect(() => {
    RndWord();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RndWord = () => {
    if (words) {
      const randomNumber = getRandomIntNotTheSame(words.length, lastNumber);
      setLastNumber(randomNumber);
      setRandomWord(words[randomNumber].engword);
    }
  };

  return (
    <RandomContainer>
      <div>Random word</div>
      <RandomWord>{randomWord}</RandomWord>
      <RandomButton onClick={RndWord}>Random Word</RandomButton>
    </RandomContainer>
  );
};
