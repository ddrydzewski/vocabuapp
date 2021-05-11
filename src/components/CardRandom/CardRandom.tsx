import React, { useState } from "react";
import { useAppState } from "../../context/state";
import { getRandomIntNotTheSame } from "../../utilts/getRandomIntNotTheSame";
import { CardDetails } from "../CardDetails/CardDetails";
import { TestsButton, TestsContainer } from "./style";

export const CardRandom = () => {
  const { words } = useAppState();
  const [lastNumber, setLastNumber] = useState(0);
  const [randomCard, setRandomCard] = useState({
    id: "",
    engword: "",
    plword: "",
  });

  const setRndCard = () => {
    if (words) {
      const randomNumber = getRandomIntNotTheSame(words.length, lastNumber);
      setLastNumber(randomNumber);
      setRandomCard({
        id: randomNumber.toString(),
        engword: words[randomNumber].engword,
        plword: words[randomNumber].plword,
      });
    }
  };

  return (
    <TestsContainer>
      {randomCard.id !== "" && <CardDetails words={randomCard} />}
      <TestsButton onClick={setRndCard}>Random Card</TestsButton>
    </TestsContainer>
  );
};
