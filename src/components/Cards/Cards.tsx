import { Icon } from "precise-ui/dist/es6";
import * as React from "react";
import { useState } from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { CardDetails } from "../CardDetails/CardDetails";
import { CardModal } from "../CardModal/CardModal";
import { AddButton, CardsContainer, Icons } from "./style";

export const Cards = () => {
  const { words, isModalOpen } = useAppState();
  const dispatch = useAppDispatch();
  const [top, setTop] = useState(1);
  const [bottom, setBottom] = useState(0);
  const [cardMaxNumber] = useState(15);

  const handleModalOpen = () => {
    dispatch({ type: "updateIsModalOpen", payload: !isModalOpen });
  };

  const handleNextCards = () => {
    if (words && words.length > top * cardMaxNumber) {
      setBottom(bottom + 1);
      setTop(top + 1);
    }
  };

  const handlePrevCards = () => {
    if (bottom > 0) {
      setBottom(bottom - 1);
      setTop(top - 1);
    }
  };

  return (
    <>
      <AddButton onClick={handleModalOpen}>Add</AddButton>
      <Icons>
        <Icon name="KeyboardArrowLeft" onClick={handlePrevCards} size={3.5}></Icon>
        {top}
        <Icon name="KeyboardArrowRight" onClick={handleNextCards} size={3.5}></Icon>
      </Icons>
      <CardsContainer>
        {words &&
          words
            .slice(bottom * cardMaxNumber, top * cardMaxNumber)
            .map((words) => <CardDetails key={words.id} words={words} />)}
      </CardsContainer>
      {isModalOpen && <CardModal />}
    </>
  );
};
