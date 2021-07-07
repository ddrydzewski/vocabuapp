import React, { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { ITestWords } from "../../../../types/ITestWords";
import { useKey } from "../../../../utilts/keyboard/useKey";
import { CardDetailsMini } from "../../CardDetails/CardDetailsMini/CardDetailsMini";
import { FormControlContainer } from "../style";

interface IProps {
  testWords: ITestWords[];
  checkAnswers: (answer: string, nextNumber: number) => void;
  handleEndTest: () => void;
}

export const Active: React.FC<IProps> = ({
  testWords,
  checkAnswers,
  handleEndTest,
}) => {
  const [answer, setAnswer] = useState("");
  const [nextNumber, setNextNumber] = useState(0);
  const Enter = useKey("Enter");

  useEffect(() => {
    if (Enter) submitAnswer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Enter]);

  const submitAnswer = () => {
    checkAnswers(answer, nextNumber);
    if (nextNumber < testWords.length - 1) {
      setNextNumber(nextNumber + 1);
    } else {
      handleEndTest();
    }
    setAnswer("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setAnswer(target.value);
  };

  return (
    <div>
      {testWords.length > 0 && (
        <CardDetailsMini
          word={testWords[nextNumber].base}
          note={testWords[nextNumber].note}
        />
      )}
      <FormControlContainer>
        <FormControl
          size="lg"
          type="text"
          placeholder="Your answer"
          onChange={handleOnChange}
          value={answer}
        />
      </FormControlContainer>{" "}
      <Button style={{ marginTop: "25px" }} onClick={submitAnswer}>
        Next word
      </Button>
    </div>
  );
};
