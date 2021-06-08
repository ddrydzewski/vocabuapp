import { BodyText, InputChangeEvent } from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import ReactModal from "react-modal";
import { useAppDispatch, useAppState } from "../../../context/state";
import { addWords } from "../../../database/add";
import { editWords } from "../../../database/edit";
import { uLevel } from "../../../enums/uLevel";
import { IWordsFirebase } from "../../../types/IWordsFirebase";
import { checkDuplicate } from "../../../utilts/checkDuplicate";
import { numberToULevel } from "../../../utilts/numberToLevel";
import {
  ModalStyles,
  StyledActions,
  StyledTextField,
  StyledTextFieldWrapper
} from "./style";

export const emptyCard: IWordsFirebase = {
  original: "",
  translation: "",
  level: uLevel.low,
  category: "all",
  note: ""
};

export const CardModal: React.FC = () => {
  const {
    isModalOpen,
    isEditMode,
    modalCard,
    words,
    wordsCollection,
  } = useAppState();
  const [card, setCard] = useState<IWordsFirebase>(emptyCard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    isEditMode && modalCard ? setCard(modalCard) : setCard(emptyCard);
  }, [modalCard, isEditMode]);

  const onSubmit = () => {
    const duplicate = words && checkDuplicate(words, card.original);
    if (!duplicate || isEditMode) {
      !isEditMode ? addSubmit() : editSubmit();
    } else {
      alert("This word already exist");
    }
    setCard(emptyCard);
  };

  const editSubmit = () => {
    if (card.original !== null && card.translation !== null && modalCard) {
      const helpEditWords = { ...card, id: modalCard.id };
      editWords(helpEditWords, wordsCollection);
    } else {
      alert("Check all fields");
    }
  };

  const addSubmit = () => {
    if (card.original !== null && card.translation !== null && words) {
      addWords(card, wordsCollection);
    } else {
      alert("Check all fields");
    }
  };

  const handleOnClose = () => {
    dispatch({ type: "updateIsModalOpen", payload: !isModalOpen });
    dispatch({ type: "updateIsEditMode", payload: false });
  };

  const handleOnChange = (e: InputChangeEvent<string>) => {
    const target = e.value;
    setCard({ ...card, [e.originalEvent?.target.name]: target });
  };

  const handleCardULevel = (ulevel: string) => {
    setCard({ ...card, level: ulevel });
  }

  return (
    <ReactModal
      style={ModalStyles}
      shouldCloseOnOverlayClick={false}
      isOpen={isModalOpen}
      onRequestClose={handleOnClose}
    >
      <div>
        {isEditMode ? (
          <BodyText>Edit your card</BodyText>
        ) : (
          <BodyText>Add your card</BodyText>
        )}
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={30}
            type="text"
            name="original"
            autoFocus={true}
            onChange={handleOnChange}
            value={card.original}
            label="Base"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={30}
            type="text"
            name="translation"
            onChange={handleOnChange}
            value={card.translation}
            label="Translation"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
          multiline
          resizable
            maxLength={80}
            type="text"
            name="note"
            onChange={handleOnChange}
            value={card.note}
            label="Note - optional"
          />
        </StyledTextFieldWrapper>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {numberToULevel(card.level)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => handleCardULevel("1")}>Learning</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleCardULevel("2")}>Familiar</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleCardULevel("3")}>Known</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <StyledActions>
        <Button
          onClick={handleOnClose}
          variant="danger"
          style={{ marginRight: "3px" }}
        >
          Cancel
        </Button>
        <Button onClick={onSubmit} variant="success">
          {isEditMode ? "Edit" : "Add"}
        </Button>
      </StyledActions>
    </ReactModal>
  );
};
