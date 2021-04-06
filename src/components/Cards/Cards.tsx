import * as React from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { CardDetails } from "../CardDetails/CardDetails";
import { CardModal } from "../CardModal/CardModal";
import { AddButton, CardsContainer } from "./style";

export const Cards = () => {
  const { words, isModalOpen } = useAppState();
  const dispatch = useAppDispatch();

  const handleModalOpen = () => {
    dispatch({ type: "updateIsModalOpen", payload: !isModalOpen });
  };

  return (
    <>
      <AddButton onClick={handleModalOpen}>Add</AddButton>
      <CardsContainer>
        {words &&
          words.map((words) => <CardDetails key={words.id} words={words} />)}
      </CardsContainer>
      {isModalOpen && <CardModal />}
    </>
  );
};
