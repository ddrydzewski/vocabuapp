import { IconLink } from "precise-ui/dist/es6";
import React, { useState } from "react";
import { useAppDispatch } from "../../context/state";
import { deleteWords } from "../../database/delete";
import { IWords } from "../../types/IWords";
import { CardContainer, IconContainer, WordContainer } from "./style";

interface IProps {
  words: IWords;
}

export const CardDetails: React.FC<IProps> = ({ words }) => {
  const dispatch = useAppDispatch();
  const [cardSide, setCardSide] = useState(false);

  const handleDelete = () => {
    deleteWords(words.id);
  };

  const handleCardSide = () => {
    setCardSide(!cardSide);
  };

  const handleEdit = () => {
    dispatch({ type: "updateModalCard", payload: words });
    dispatch({ type: "updateIsEditMode", payload: true });
    dispatch({ type: "updateIsModalOpen", payload: true });
  };

  return (
    <>
      <CardContainer onClick={handleCardSide}>
        <WordContainer>{cardSide ? words.engword : words.plword}</WordContainer>
        <IconContainer>
          <IconLink icon="Create" onClick={handleEdit}></IconLink>
          <IconLink icon="Delete" onClick={handleDelete}></IconLink>
        </IconContainer>
      </CardContainer>
    </>
  );
};
