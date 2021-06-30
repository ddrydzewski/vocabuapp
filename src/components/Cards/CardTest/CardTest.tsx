import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useAppState } from "../../../context/state";
import { CardContainer } from "../CardDetails/style";
import { CardOptions } from "../CardOptions/CardOptions";

export const CardTest = () => {
  const { currentWords } = useAppState();
  const [isStart, setIsStart] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [nextNumber, setNextNumber] = useState(0);

  const handleStartButton = () => {
    setIsStart(false);
    setIsActive(true);
  };

  return (
    <div>
      {isStart && (
        <div>
          <CardOptions />
          <Button onClick={handleStartButton}>Start Your Test</Button>
        </div>
      )}
      {isActive && (
        <div>
          <CardContainer>
            {currentWords.length > 0 && <div>{currentWords[nextNumber].original}</div>}
          </CardContainer>
          <FormControl size="lg" type="text" placeholder="Your answer" />{" "}
          <Button onClick={() => setNextNumber(nextNumber + 1)}>
            Next word
          </Button>
        </div>
      )}
    </div>
  );
};
