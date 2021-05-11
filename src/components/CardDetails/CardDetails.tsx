import { IconLink } from "precise-ui/dist/es6";
import React, { useState } from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { deleteWords } from "../../database/delete";
import { IWords } from "../../types/IWords";
import { CardContainer, IconContainer, WordContainer } from "./style";

interface IProps {
  card: IWords;
}

export const CardDetails: React.FC<IProps> = ({ card }) => {
  const dispatch = useAppDispatch();
  const [cardSide, setCardSide] = useState(false);
  const { wordsCollection } = useAppState();

  const cardSideClick = () => {
    setCardSide(!cardSide);
  };

  const onDelete = () => {
    deleteWords(card.id, wordsCollection);
  };

  const confirmDelete = () => {
    if (window.confirm("do you really want to delete it ?")) onDelete();
  };

  const onEdit = () => {
    dispatch({ type: "updateModalCard", payload: card });
    dispatch({ type: "updateIsModalOpen", payload: true });
    dispatch({ type: "updateIsEditMode", payload: true });
  };

  return (
    <>
      <CardContainer onClick={cardSideClick}>
        <WordContainer>{cardSide ? card.engword : card.plword}</WordContainer>
        <IconContainer>
          <IconLink icon="Create" onClick={onEdit}></IconLink>
          <IconLink icon="Delete" onClick={confirmDelete}></IconLink>
        </IconContainer>
      </CardContainer>
    </>
  );
};
