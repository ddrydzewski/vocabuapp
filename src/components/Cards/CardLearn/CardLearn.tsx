import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useAppDispatch, useAppState } from "../../../context/state";
import { getRandomIntNotTheSame } from "../../../utilts/getRandomIntNotTheSame";
import { useKey } from "../../../utilts/useKey";
import { CardDetails } from "../CardDetails/CardDetails";
import { CardModal } from "../CardModal/CardModal";
import { TestsContainer } from "./style";

export const CardLearn = () => {
  const { words, isModalOpen, isTranslationSide } = useAppState();
  const dispatch = useAppDispatch();
  const [next, setNext] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const leftArrow = useKey("ArrowLeft");
  const rightArrow = useKey("ArrowRight");

  useEffect(() => {
    if (leftArrow) handlePrevCard();
    if (rightArrow) handleNextCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftArrow, rightArrow]);

  const setCard = (isForward: boolean) => {
    if (!words) return;
    if (isForward) {
      next < words.length - 1 ? setNext(next + 1) : setNext(0);
    } else {
      next === 0 ? setNext(words.length - 1) : setNext(next - 1);
    }
  };

  const setRandomCard = () => {
    if (words) {
      const randomNumber = getRandomIntNotTheSame(words.length, lastNumber);
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

  const handleTranslationMode = () => {
    dispatch({ type: "updateIsTranslationSide", payload: !isTranslationSide });
  };

  return (
    <TestsContainer>
      {isModalOpen && <CardModal />}
      <div style={{ fontSize: "25px" }}>
        {words && next + 1 + "/" + words?.length}
      </div>
      {words && words?.length > 0 && <CardDetails card={words[next]} />}
      <div style={{ marginBottom: "15px" }}>
        {!isRandomMode && (
          <Button
            style={{ marginRight: "5px" }}
            variant="primary"
            disabled={!(words && words?.length > 0)}
            onClick={handlePrevCard}
          >
            Prev
          </Button>
        )}
        <Button
          variant="primary"
          disabled={!(words && words?.length > 0)}
          onClick={handleNextCard}
        >
          Next
        </Button>
      </div>
      <div>
        <ButtonGroup>
          <Button
            style={{ marginRight: "5px" }}
            variant="success"
            onClick={(e) => setIsRandomMode(false)}
          >
            In order
          </Button>
          <Button variant="success" onClick={(e) => setIsRandomMode(true)}>
            Random
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ marginTop: "15px" }}>
        <Button onClick={handleTranslationMode} variant="outline-dark">
          {isTranslationSide ? "Translation" : "Base"}
        </Button>
      </div>
    </TestsContainer>
  );
};
