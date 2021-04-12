import {
  BodyText,

  colors,
  InputChangeEvent
} from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useAppDispatch, useAppState } from "../../context/state";
import { addWords } from "../../database/add";
import { editWords } from "../../database/edit";
import { IWordsFirebase } from "../../types/IWordsFirebase";
import { checkDuplicate } from "../../utilts/checkDuplicate";
import { ButtonScheme } from "../style";
import {
  ModalStyles,
  StyledActions,
  StyledTextField,
  StyledTextFieldWrapper
} from "./style";

export const emptyCard: IWordsFirebase = {
  engword: "",
  plword: "",
};

export const CardModal: React.FC = () => {
  const { isModalOpen, isEditMode, modalCard, words } = useAppState();
  const [card, setCard] = useState<IWordsFirebase>(emptyCard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    isEditMode && modalCard ? setCard(modalCard) : setCard(emptyCard);
  }, [modalCard, isEditMode]);

  const onSubmit = () => {
    const duplicate = words && checkDuplicate(words, card.engword);
    if (!duplicate || isEditMode) {
      !isEditMode ? addSubmit() : editSubmit();
    }else {
      alert("This word already exist");
    }
    setCard(emptyCard);
  };

  const editSubmit = () => {
    if (card.engword !== null && card.plword !== null && modalCard) {
      const helpEditWords = { ...card, id: modalCard.id };
      editWords(helpEditWords);
    } else {
      alert("Check all fields");
    }
  };

  const addSubmit = () => {
    if (card.engword !== null && card.plword !== null && words) {
      addWords(card);
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

  return (
    <ReactModal
      style={ModalStyles}
      shouldCloseOnOverlayClick={false}
      isOpen={isModalOpen}
      onRequestClose={handleOnClose}
    >
      <div>
        <BodyText>Add your card</BodyText>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={30}
            type="string"
            name="engword"
            onChange={handleOnChange}
            value={card.engword}
            label="English"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={30}
            type="string"
            name="plword"
            onChange={handleOnChange}
            value={card.plword}
            label="Polish"
          />
        </StyledTextFieldWrapper>
      </div>
      <StyledActions>
        <ButtonScheme
          type="button"
          onClick={handleOnClose}
          style={{ background: colors.grey1 }}
        >
          Cancel
        </ButtonScheme>
        <ButtonScheme onClick={onSubmit} style={{ background: '#05386B' }}>
          {isEditMode ? "Edit" : "Add"}
        </ButtonScheme>
      </StyledActions>
    </ReactModal>
  );
};
