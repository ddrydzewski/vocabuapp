import React, { useState } from "react";
import { Button, ButtonGroup, Card, Dropdown, Modal } from "react-bootstrap";
import { useAppDispatch, useAppState } from "../../../context/state";
import { CardTestContainer, OptionContainer } from "./style";

export const CardOptions = () => {
  const { currentCategory, categories, isTranslationSide } = useAppState();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleDropdownCategory = (key: string) => {
    dispatch({ type: "updateCurrentCategory", payload: key });
  };

  const changeTranslationMode = () => {
    dispatch({ type: "updateIsTranslationSide", payload: !isTranslationSide });
  };

  const changeRandomMode = (decision: boolean) => {
    dispatch({ type: "updateIsRandomMode", payload: decision });
  };

  return (
    <CardTestContainer>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginTop: "15px" }}
      >
        Options
      </Button>
      <Modal
        show={show}
        style={{
          marginLeft: "-450px",
          marginTop: "100px",
          overlay: { backgroundColor: "rgba(0,0,0,0)" },
        }}
        onHide={handleShow}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Options</Modal.Title>
        </Modal.Header>
        <OptionContainer>
          <Card.Title>Choose category to learn</Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {currentCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((val) => (
                <Dropdown.Item onClick={() => handleDropdownCategory(val)}>
                  {val}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Card.Title>Choose start side of your cards</Card.Title>
          <div style={{ marginTop: "15px" }}>
            <Button onClick={changeTranslationMode} variant="outline-dark">
              {isTranslationSide ? "Translation" : "Base"}
            </Button>
          </div>
          <Card.Title>Next Card in Order or Random</Card.Title>
          <div>
            <ButtonGroup>
              <Button
                style={{ marginRight: "5px" }}
                variant="success"
                onClick={() => changeRandomMode(false)}
              >
                In order
              </Button>
              <Button variant="success" onClick={() => changeRandomMode(true)}>
                Random
              </Button>
            </ButtonGroup>
          </div>
        </OptionContainer>
      </Modal>
    </CardTestContainer>
  );
};
