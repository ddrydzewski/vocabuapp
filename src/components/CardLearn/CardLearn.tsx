import React, { useState } from "react";
import { useAppState } from "../../context/state";
import emptyLogo from "../../icons/empty-512.png";
import { CardDetails } from "../CardDetails/CardDetails";
import { TestsButton, TestsContainer } from "../CardRandom/style";

export const CardLearn = () => {
  const { words } = useAppState();
  const [next, setNext] = useState(0);

  const handleNextCard = () => {
    if (words && next < words.length - 1) setNext(next + 1);
    else setNext(0);
  };

  return (
    <TestsContainer>
      {words && words?.length > 0 ? (
        <CardDetails words={words[next]} />
      ) : (
        <img src={emptyLogo} alt="fireSpot"></img>
      )}
      <TestsButton onClick={handleNextCard}>Next Card</TestsButton>
    </TestsContainer>
  );
};
