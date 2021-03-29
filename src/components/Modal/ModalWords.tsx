import {
  BodyText,
  Button,
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
import {
  ModalStyles,
  StyledActions,
  StyledTextField,
  StyledTextFieldWrapper
} from "./style";

export const emptyWords: IWordsFirebase = {
  engword: "",
  plword: "",
};

export const ModalWords: React.FC = () => {
  const { isModalOpen, isEditMode, modalWords, words } = useAppState();
  const [vocabu, setVocabu] = useState<IWordsFirebase>(emptyWords);
  const dispatch = useAppDispatch();

  useEffect(() => {
    isEditMode && modalWords ? setVocabu(modalWords) : setVocabu(emptyWords);
  }, [modalWords, isEditMode]);

  const onSubmit = () => {
    const duplicate = words && checkDuplicate(words, vocabu.engword);
    if (!duplicate) {
      !isEditMode ? addSubmit() : editSubmit();
    }else {
      alert("This word already exist");
    }
    setVocabu(emptyWords);
  };

  const editSubmit = () => {
    if (vocabu.engword !== null && vocabu.plword !== null && modalWords) {
      const helpEditWords = { ...vocabu, id: modalWords.id };
      editWords(helpEditWords);
    } else {
      alert("Check all fields");
    }
  };

  const addSubmit = () => {
    if (vocabu.engword !== null && vocabu.plword !== null && words) {
      addWords(vocabu);
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
    setVocabu({ ...vocabu, [e.originalEvent?.target.name]: target });
  };

  return (
    <ReactModal
      style={ModalStyles}
      shouldCloseOnOverlayClick={false}
      isOpen={isModalOpen}
      onRequestClose={handleOnClose}
    >
      <div>
        <BodyText>Add your vocabu</BodyText>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={30}
            type="string"
            name="engword"
            onChange={handleOnChange}
            value={vocabu.engword}
            label="English"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={30}
            type="string"
            name="plword"
            onChange={handleOnChange}
            value={vocabu.plword}
            label="Polish"
          />
        </StyledTextFieldWrapper>
      </div>
      <StyledActions>
        <Button
          type="button"
          onClick={handleOnClose}
          style={{ background: colors.grey1 }}
        >
          Anuluj
        </Button>
        <Button onClick={onSubmit} style={{ background: colors.green4 }}>
          {isEditMode ? "Edytuj" : "Dodaj"}
        </Button>
      </StyledActions>
    </ReactModal>
  );
};
