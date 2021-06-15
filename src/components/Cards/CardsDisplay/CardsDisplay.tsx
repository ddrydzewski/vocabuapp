import { Icon } from "precise-ui/dist/es6";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useAppDispatch, useAppState } from "../../../context/state";
import { CardDetails } from "../CardDetails/CardDetails";
import { CardModal } from "../CardModal/CardModal";
import {
  AddButtonContainer,
  CardsContainer,
  CardsPageNumber,
  Icons
} from "./style";

export const CardsDisplay = () => {
  const { words, isModalOpen, categories } = useAppState();
  const dispatch = useAppDispatch();
  const [top, setTop] = useState(1);
  const [bottom, setBottom] = useState(0);
  const [cardMaxNumber] = useState(15);
  const [key, setKey] = useState<string>("all");

  useEffect(() => {
    dispatch({ type: "updateCurrentCategory", payload: key });
  }, [key, dispatch]);

  const handleModalOpen = () => {
    dispatch({ type: "updateIsModalOpen", payload: !isModalOpen });
  };

  const handleNextCards = () => {
    if (words.length > top * cardMaxNumber) {
      setBottom(bottom + 1);
      setTop(top + 1);
    }
  };

  const handlePrevCards = () => {
    if (bottom > 0) {
      setBottom(bottom - 1);
      setTop(top - 1);
    }
  };

  return (
    <>
      <CardsContainer>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => k !== null && setKey(k)}
        >
          {categories.map((category) => (
            <Tab key={category} eventKey={category} title={category} />
          ))}
        </Tabs>
        <Container>
          <Row>
            {words.length > 0 &&
              words
                .slice(bottom * cardMaxNumber, top * cardMaxNumber)
                .map(
                  (words) =>
                    words.category === key && (
                      <CardDetails key={words.id} card={words} />
                    )
                )}
          </Row>
        </Container>
      </CardsContainer>
      {words.length > cardMaxNumber && (
        <Icons>
          <Icon
            name="KeyboardArrowLeft"
            onClick={handlePrevCards}
            size={3.5}
          ></Icon>
          <CardsPageNumber>{top}</CardsPageNumber>
          <Icon
            name="KeyboardArrowRight"
            onClick={handleNextCards}
            size={3.5}
          ></Icon>
        </Icons>
      )}
      <AddButtonContainer>
        <Button variant="success" onClick={handleModalOpen}>
          <Icon name="Add" />
        </Button>
      </AddButtonContainer>
      {isModalOpen && <CardModal />}
    </>
  );
};
