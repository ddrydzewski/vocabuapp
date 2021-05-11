import { IconLink } from "precise-ui/dist/es6";
import React, { useState } from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { deleteWords } from "../../database/delete";
import { IWords } from "../../types/IWords";
import { CardContainer, IconContainer, WordContainer } from "./style";

interface IProps {
  words: IWords;
}

export const CardDetails: React.FC<IProps> = ({ words }) => {
  const dispatch = useAppDispatch();
  const [cardSide, setCardSide] = useState(false);
  const { wordsCollection } = useAppState();

  const cardSideClick = () => {
    setCardSide(!cardSide);
  };

  const onDelete = () => {
    deleteWords(words.id, wordsCollection);
  };

  const confirmDelete = () => {
    if (window.confirm("do you really want to delete it ?")) onDelete();
  };

  const onEdit = () => {
    dispatch({ type: "updateModalCard", payload: words });
    dispatch({ type: "updateIsModalOpen", payload: true });
    dispatch({ type: "updateIsEditMode", payload: true });
  };

  return (
    <>
      <CardContainer onClick={cardSideClick}>
        <WordContainer>{cardSide ? words.engword : words.plword}</WordContainer>
        <IconContainer>
          <IconLink icon="Create" onClick={onEdit}></IconLink>
          <IconLink icon="Delete" onClick={confirmDelete}></IconLink>
        </IconContainer>
      </CardContainer>
    </>
  );
};
