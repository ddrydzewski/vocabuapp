import * as React from "react";
import { useAppDispatch, useAppState } from "../../../context/state";
import { ModalWords } from "../../Modal/ModalWords";
import { WordsDetails } from "../WordsDetails/WordsDetails";
import { AddButton, AllWordsContainer } from "./style";

export const AllWords = () => {
  const { words, isModalOpen } = useAppState();
  const dispatch = useAppDispatch();

  const handleModalOpen = () => {
    dispatch({ type: "updateIsModalOpen", payload: !isModalOpen });
  };

  return (
    <>
      <AllWordsContainer>
        {words &&
          words.map((words) => <WordsDetails key={words.id} words={words} />)}
      </AllWordsContainer>
      {isModalOpen && <ModalWords />}
      <AddButton onClick={handleModalOpen}>Add</AddButton>
    </>
  );
};
