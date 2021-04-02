import { IconLink } from "precise-ui/dist/es6";
import React from "react";
import { useAppDispatch } from "../../../context/state";
import { deleteWords } from "../../../database/delete";
import { IWords } from "../../../types/IWords";
import { WordBox, WordsContainer } from "./style";

interface IProps {
  words: IWords;
}

export const WordsDetails: React.FC<IProps> = ({ words }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    deleteWords(words.id);
  };

  const handleEdit = () => {
    dispatch({ type: "updateModalWords", payload: words });
    dispatch({ type: "updateIsEditMode", payload: true });
    dispatch({ type: "updateIsModalOpen", payload: true });
  };

  return (
    <>
      <WordsContainer>
        <WordBox>{words.engword}</WordBox>
        <WordBox>{words.plword}</WordBox>
        <IconLink icon="Create" onClick={handleEdit}></IconLink>
        <IconLink icon="Delete" onClick={handleDelete}></IconLink>
      </WordsContainer>
    </>
  );
};
