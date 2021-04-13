import React, { useState } from "react";
import { useAppState } from "../../context/state";
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
        {next + 1} / {words?.length}
      {words && <CardDetails words={words[next]} />}
      <TestsButton onClick={handleNextCard}>Next Card</TestsButton>
    </TestsContainer>
  );
};
