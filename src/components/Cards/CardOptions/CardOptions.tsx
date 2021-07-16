import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  FormCheck,
  Nav
} from "react-bootstrap";
import { useAppDispatch, useAppState } from "../../../context/state";
import { options } from "../../../enums/options";
import { uLevel } from "../../../enums/uLevel";
import { checkCurrentULevels } from "../../../utilts/understandLevel/checkCurrentULevels";
import { ButtonStyled } from "../../style";
import "./modalStyle.css";
import { OptionContainer } from "./style";

interface IProps {
  isTestMode?: boolean;
}

export const CardOptions: React.FC<IProps> = ({ isTestMode }) => {
  const {
    currentCategory,
    categories,
    isTranslationSide,
    currentULevels,
  } = useAppState();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [optionsTab, setOptionsTab] = useState<options>(options.category);

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

  const handleULevels = (nameOfCheckbox: string) => {
    if (checkCurrentULevels(currentULevels, nameOfCheckbox)) return;

    if (nameOfCheckbox === uLevel.low) {
      dispatch({
        type: "updateCurrentULevels",
        payload: { ...currentULevels, first: !currentULevels.first },
      });
    } else if (nameOfCheckbox === uLevel.mid) {
      dispatch({
        type: "updateCurrentULevels",
        payload: { ...currentULevels, second: !currentULevels.second },
      });
    } else if (nameOfCheckbox === uLevel.top) {
      dispatch({
        type: "updateCurrentULevels",
        payload: { ...currentULevels, third: !currentULevels.third },
      });
    }
  };

  return (
    <>
      <ButtonStyled>
        <Button variant="primary" onClick={handleShow}>
          Options
        </Button>
      </ButtonStyled>
      {show && (
        <OptionContainer>
          <Card>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link onClick={() => setOptionsTab(options.category)}>
                    Categories
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setOptionsTab(options.translation)}>
                    Translation
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setOptionsTab(options.uLevel)}>
                    Understand Level
                  </Nav.Link>
                </Nav.Item>
                {!isTestMode && (
                  <Nav.Item>
                    <Nav.Link onClick={() => setOptionsTab(options.random)}>
                      Order of Cards
                    </Nav.Link>
                  </Nav.Item>
                )}
              </Nav>
            </Card.Header>
            {optionsTab === options.category && (
              <Card.Body>
                <Card.Title>Choose category to learn</Card.Title>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentCategory}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {categories.map((val) => (
                      <Dropdown.Item
                        onClick={() => handleDropdownCategory(val)}
                      >
                        {val}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            )}
            {optionsTab === options.translation && (
              <Card.Body>
                <Card.Title>Choose start side of your cards</Card.Title>
                <Button onClick={changeTranslationMode} variant="outline-dark">
                  {isTranslationSide
                    ? "Translation to Base"
                    : "Base to Translation"}
                </Button>
              </Card.Body>
            )}
            {optionsTab === options.uLevel && (
              <Card.Body>
                <Card.Title>Choose understand level of your cards</Card.Title>
                <FormCheck
                  label="Learning"
                  type="checkbox"
                  checked={currentULevels.first}
                  onChange={(e) => handleULevels(e.currentTarget.name)}
                  name="1"
                />
                <FormCheck
                  label="Familiar"
                  type="checkbox"
                  checked={currentULevels.second}
                  onChange={(e) => handleULevels(e.currentTarget.name)}
                  name="2"
                />
                <FormCheck
                  label="Known"
                  type="checkbox"
                  checked={currentULevels.third}
                  onChange={(e) => handleULevels(e.currentTarget.name)}
                  name="3"
                />
              </Card.Body>
            )}
            {optionsTab === options.random && (
              <Card.Body>
                <Card.Title>Next Card in Order or Random</Card.Title>
                <ButtonGroup>
                  <Button
                    style={{ marginRight: "5px" }}
                    variant="success"
                    onClick={() => changeRandomMode(false)}
                  >
                    In order
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => changeRandomMode(true)}
                  >
                    Random
                  </Button>
                </ButtonGroup>
              </Card.Body>
            )}
          </Card>
        </OptionContainer>
      )}
    </>
  );
};
