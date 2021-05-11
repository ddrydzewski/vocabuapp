import React, { useEffect, useState } from "react";
import { useAppState } from "../../context/state";
import emptyLogo from "../../icons/empty-512.png";
import { CardDetails } from "../CardDetails/CardDetails";
import { TestsButton, TestsContainer } from "../CardRandom/style";

export const CardLearn = () => {
  const { words } = useAppState();
  const [next, setNext] = useState(0);
  const [isWords, setIsWords] = useState(true);

  useEffect(() => {
    words && words?.length > 0 ? setIsWords(false) : setIsWords(true);
  }, [words]);

  const handleNextCard = () => {
    if (words && next < words.length - 1) setNext(next + 1);
    else setNext(0);
  };

  return (
    <TestsContainer>
      {!isWords && words ? (
        <CardDetails card={words[next]} />
      ) : (
        <img src={emptyLogo} alt="fireSpot"></img>
      )}
      <TestsButton disabled={isWords} onClick={handleNextCard}>
        Next Card
      </TestsButton>
    </TestsContainer>
  );
};
