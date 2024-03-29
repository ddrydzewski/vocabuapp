import { Icon } from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { useAppDispatch, useAppState } from "../../../context/state";
import { deleteWords } from "../../../database/delete";
import { editWords } from "../../../database/edit";
import { IWords } from "../../../types/IWords";
import { useKey } from "../../../utilts/keyboard/useKey";
import { levelToBorderColor } from "../../../utilts/understandLevel/levelToBorderColor";
import { CardNote } from "../CardNote/CardNote";
import {
  CardContainer,
  DropdownContainer,
  IconContainer,
  NoteContainer,
  WordContainer
} from "./style";

interface IProps {
  card: IWords;
}

export const CardDetails = React.memo<IProps>(({ card }) => {
  const dispatch = useAppDispatch();
  const {
    wordsCollection,
    isTranslationSide,
    words,
    isModalOpen,
  } = useAppState();
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
    if (shift && !isModalOpen) cardSideClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shift]);

  const cardSideClick = () => {
    setCardSide(!cardSide);
  };

  const onDelete = () => {
    deleteWords(card.id, wordsCollection);
  };

  const confirmDelete = () => {
    if (words.length > 1) {
      if (window.confirm("do you really want to delete it ?")) {
        onDelete();
      }
    }
  };

  const onEdit = () => {
    dispatch({ type: "updateModalCard", payload: card });
    dispatch({ type: "updateIsModalOpen", payload: true });
    dispatch({ type: "updateIsEditMode", payload: true });
  };

  const handleCardULevel = (ulevel: string) => {
    editWords({ ...card, level: ulevel }, wordsCollection);
  };

  return (
    <CardContainer>
      <Card className="text-center">
        <Card.Body
          onClick={cardSideClick}
          style={{
            border: levelToBorderColor(card.level),
            cursor: "pointer",
            borderRadius: "3px",
            height: "100px",
          }}
        >
          <Card.Title>
            <WordContainer>
              {cardSide ? card.translation : card.original}
            </WordContainer>
          </Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted" style={{ height: "35px" }}>
          <IconContainer>
            <Icon
              style={{
                marginRight: "5px",
                marginBottom: "2px",
                cursor: "pointer",
              }}
              name="Create"
              onClick={onEdit}
            ></Icon>
            <Icon
              style={{ marginBottom: "2px", cursor: "pointer" }}
              name="Delete"
              onClick={confirmDelete}
            ></Icon>
            <DropdownContainer>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="info"
                  id="dropdown-basic"
                  style={{ height: "25px" }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e) => handleCardULevel("1")}>
                    Learning
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => handleCardULevel("2")}>
                    Familiar
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => handleCardULevel("3")}>
                    Known{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </DropdownContainer>
            <NoteContainer>
              {card.note && <CardNote note={card.note} />}
            </NoteContainer>
          </IconContainer>
        </Card.Footer>
      </Card>
    </CardContainer>
  );
});
