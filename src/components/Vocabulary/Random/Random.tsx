import React, { useEffect, useState } from "react";
import { useAppState } from "../../../context/state";
import { getRandomInt } from "../../../utilts/getRandomInt";
import { RandomContainer } from "./style";

export const Random = () => {
  const { words } = useAppState();
  const [randomWord, setRandomWord] = useState("Random Word");

  useEffect(() => {
    RndWord();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RndWord = () => {
    if (words) {
      const randomNumber = getRandomInt(words.length);
      setRandomWord(words[randomNumber].engword);
    }
  };

  return (
    <RandomContainer>
      <div>Random word: </div>
      <div>{randomWord}</div>
      <button onClick={RndWord}>Random Word</button>
    </RandomContainer>
  );
};
