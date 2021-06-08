import { Icon } from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppState } from "../../../context/state";
import { deleteWords } from "../../../database/delete";
import { IWords } from "../../../types/IWords";
import { levelToBorderColor } from "../../../utilts/levelToBorderColor";
import { useKey } from "../../../utilts/useKey";
import { CardNote } from "../CardNote/CardNote";
import { CardContainer, IconContainer, WordContainer } from "./style";

interface IProps {
  card: IWords;
}

export const CardDetails: React.FC<IProps> = ({ card }) => {
  const dispatch = useAppDispatch();
  const { wordsCollection, isTranslationSide } = useAppState();
  const [cardSide, setCardSide] = useState(isTranslationSide);
  const [cardID, setCardID] = useState<string>("");
  const shift = useKey("Shift");

  useEffect(() => {
    if (cardID !== card.id) {
      setCardID(card.id);
      setCardSide(isTranslationSide);
    }
  }, [card.id, cardID, isTranslationSide]);

  useEffect(() => {
    if (shift) cardSideClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shift]);

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
      <CardContainer
        onClick={cardSideClick}
        style={{ border: levelToBorderColor(card.level) }}
      >
        <WordContainer>
          {cardSide ? card.translation : card.original}
        </WordContainer>
        <IconContainer>
          <Icon name="Create" onClick={onEdit}></Icon>
          <Icon name="Delete" onClick={confirmDelete}></Icon>
        </IconContainer>
        {card.note && <CardNote note={card.note} />}
      </CardContainer>
    </>
  );
};

// <DropdownButton id="dropdown-basic-button" variant="secondary" title="">
// <Dropdown.Item href="#/action-1">Good</Dropdown.Item>
// <Dropdown.Item href="#/action-2">Almost</Dropdown.Item>
// <Dropdown.Item href="#/action-3">Learning</Dropdown.Item>
// </DropdownButton>
