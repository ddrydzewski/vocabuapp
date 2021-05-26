import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useAppDispatch, useAppState } from "../../context/state";
import { getRandomIntNotTheSame } from "../../utilts/getRandomIntNotTheSame";
import { CardDetails } from "../CardDetails/CardDetails";
import { CardModal } from "../CardModal/CardModal";
import { TestsContainer } from "./style";

const nextCardMode = [
  { name: "In order", value: "1" },
  { name: "Random", value: "2" },
];

export const CardLearn = () => {
  const { words, isModalOpen, isTranslationSide } = useAppState();
  const dispatch = useAppDispatch();
  const [next, setNext] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [radioValue, setRadioValue] = useState("1");

  const setCard = () => {
    if (words && next < words.length - 1) setNext(next + 1);
    else setNext(0);
  };

  const setRandomCard = () => {
    if (words) {
      const randomNumber = getRandomIntNotTheSame(words.length, lastNumber);
      setLastNumber(randomNumber);
      setNext(randomNumber);
    }
  };

  const handleNextCard = () => {
    radioValue === "1" ? setCard() : setRandomCard();
  };

  const handleTranslationMode = () => {
    dispatch({ type: "updateIsTranslationSide", payload: !isTranslationSide });
  };

  return (
    <TestsContainer>
      {isModalOpen && <CardModal />}
      <div>{words && next + 1 + "/" + words?.length}</div>
      {words && words?.length > 0 && <CardDetails card={words[next]} />}
      <div style={{ marginBottom: "15px" }}>
        <Button
          variant="primary"
          disabled={!(words && words?.length > 0)}
          onClick={handleNextCard}
        >
          Next
        </Button>
      </div>
      <div>
        <ButtonGroup toggle>
          {nextCardMode.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="outline-success"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div style={{ marginTop: "15px" }}>
        <Button onClick={handleTranslationMode} variant="outline-dark">
          {isTranslationSide ? "Polish" : "English"}
        </Button>
      </div>
    </TestsContainer>
  );
};
