import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAppState } from "../../../context/state";
import { getRandomIntNotTheSame } from "../../../utilts/getRandomIntNotTheSame";
import { useKey } from "../../../utilts/keyboard/useKey";
import { CardDetails } from "../CardDetails/CardDetails";
import { CardOptions } from "../CardOptions/CardOptions";
import { TestsContainer } from "./style";

export const CardLearn = () => {
  const { currentWords, isRandomMode, currentCategory } = useAppState();
  const [next, setNext] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const leftArrow = useKey("ArrowLeft");
  const rightArrow = useKey("ArrowRight");

  useEffect(() => {
    if (leftArrow) handlePrevCard();
    if (rightArrow) handleNextCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftArrow, rightArrow]);

  useEffect(() => {
    setNext(0);
  }, [currentCategory]);

  const setCard = (isForward: boolean) => {
    if (!currentWords) return;
    if (isForward) {
      next < currentWords.length - 1 ? setNext(next + 1) : setNext(0);
    } else {
      next === 0 ? setNext(currentWords.length - 1) : setNext(next - 1);
    }
  };

  const setRandomCard = () => {
    if (currentWords) {
      const randomNumber = getRandomIntNotTheSame(
        currentWords.length,
        lastNumber
      );
      setLastNumber(randomNumber);
      setNext(randomNumber);
    }
  };

  const handleNextCard = () => {
    isRandomMode ? setRandomCard() : setCard(true);
  };

  const handlePrevCard = () => {
    !isRandomMode && setCard(false);
  };

  return (
    <>
      <TestsContainer>
        <div style={{ fontSize: "25px" }}>
          {currentWords && next + 1 + "/" + currentWords.length}
        </div>
        {currentWords[next] && currentWords?.length > 0 && (
          <CardDetails card={currentWords[next]} />
        )}
        <div style={{ marginBottom: "15px" }}>
          {!isRandomMode && (
            <Button
              style={{ marginRight: "5px" }}
              variant="primary"
              disabled={!(currentWords && currentWords?.length > 0)}
              onClick={handlePrevCard}
            >
              Prev
            </Button>
          )}
          <Button
            variant="primary"
            disabled={!(currentWords && currentWords?.length > 0)}
            onClick={handleNextCard}
          >
            Next
          </Button>
        </div>
        <CardOptions />
      </TestsContainer>
    </>
  );
};
