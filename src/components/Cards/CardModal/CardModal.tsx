import { BodyText, InputChangeEvent } from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import ReactModal from "react-modal";
import { useAppDispatch, useAppState } from "../../../context/state";
import { addWords } from "../../../database/add";
import { editWords } from "../../../database/edit";
import { colors } from "../../../design/colorStyles/colorStyles";
import { uLevel } from "../../../enums/uLevel";
import { IWordsFirebase } from "../../../types/IWordsFirebase";
import { isNewCategory } from "../../../utilts/category/isNewCategory";
import { checkDuplicate } from "../../../utilts/checkSomething/checkDuplicate";
import { checkMinLength } from "../../../utilts/checkSomething/checkMinLength";
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
  note: "",
};

export const CardModal: React.FC = () => {
  const {
    isModalOpen,
    isEditMode,
    modalCard,
    words,
    categories,
    currentCategory,
    wordsCollection,
  } = useAppState();
  const [card, setCard] = useState<IWordsFirebase>(emptyCard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    isEditMode && modalCard
      ? setCard(modalCard)
      : setCard({ ...emptyCard, category: currentCategory });
  }, [modalCard, isEditMode, currentCategory]);

  const onSubmit = () => {
    const duplicate = words && checkDuplicate(words, card.original);
    if (!duplicate || isEditMode) {
      !isEditMode ? addSubmit() : editSubmit();
      if (isNewCategory(categories, card.category)) {
        const categoryMap = categories.concat(card.category);
        dispatch({ type: "updateCategories", payload: categoryMap });
      }
    } else {
      alert("This word already exist");
    }
    setCard(emptyCard);
  };

  const editSubmit = () => {
    if (checkMinLength(card) && modalCard) {
      const helpEditWords = { ...card, id: modalCard.id };
      editWords(helpEditWords, wordsCollection);
    } else {
      alert("Check all fields");
    }
  };

  const addSubmit = () => {
    if (checkMinLength(card)) {
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
        <InputGroup>
          <StyledTextField
            maxLength={30}
            type="text"
            name="category"
            onChange={handleOnChange}
            value={card.category}
            label="Category"
            style={{ backgroundColor: colors.primeColor }}
          />
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Select from category"
            size="sm"
            id="input-group-dropdown-2"
            style={{ marginBottom: "0.5rem" }}
          >
            {categories.map((cat) => (
              <Dropdown.Item
                key={cat}
                onClick={() => setCard({ ...card, category: cat })}
              >
                {cat}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </InputGroup>
        <StyledTextField
          multiline
          maxLength={80}
          type="text"
          name="note"
          onChange={handleOnChange}
          value={card.note}
          label="Note - optional"
        />
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
