import React from "react";
import { Button } from "react-bootstrap";
import { CardOptions } from "../../CardOptions/CardOptions";
import { StartContainer } from "./style";

interface IProps {
  handleStart: () => void;
}

export const Start: React.FC<IProps> = ({ handleStart }) => {
  return (
    <StartContainer>
      <h1> Test yourself</h1>
      <Button style={{ marginTop: "30px" }} onClick={handleStart}>
        Start Your Test
      </Button>
      <CardOptions isTestMode={true} />
    </StartContainer>
  );
};
