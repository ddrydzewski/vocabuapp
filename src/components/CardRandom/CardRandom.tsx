import React, { useEffect, useState } from "react";
import { useAppState } from "../../context/state";
import { getRandomIntNotTheSame } from "../../utilts/getRandomIntNotTheSame";
import { CardDetails } from "../CardDetails/CardDetails";
import { TestsButton, TestsContainer } from "./style";

export const CardRandom = () => {
  const { words } = useAppState();
  const [isWords, setIsWords] = useState(true);
  const [lastNumber, setLastNumber] = useState(0);
  const [randomCard, setRandomCard] = useState({
    id: "",
    engword: "",
    plword: "",
  });

  useEffect(() => {
    words && words?.length > 0 ? setIsWords(false) : setIsWords(true);
  }, [words]);

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
      {randomCard.id !== "" && <CardDetails card={randomCard} />}
      <TestsButton disabled={isWords} onClick={setRndCard}>Random Card</TestsButton>
    </TestsContainer>
  );
};
