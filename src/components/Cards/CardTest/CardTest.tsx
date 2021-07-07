import React, { useState } from "react";
import { useAppState } from "../../../context/state";
import { stateOfTest } from "../../../enums/stateOfTest";
import { ITestWords } from "../../../types/ITestWords";
import { checkAnswer } from "../../../utilts/checkSomething/checkAnswer";
import { initRandomTest } from "../../../utilts/userTest/initRandomTest";
import { CardTestContainer } from "./style";
import { Active } from "./TestActive/Active";
import { End } from "./TestEnd/End";
import { Start } from "./TestStart/Start";

export const CardTest = () => {
  const { currentWords, isTranslationSide } = useAppState();
  const [testWords, setTestWords] = useState<ITestWords[]>([]);
  const [testState, setTestState] = useState<stateOfTest>(stateOfTest.start);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [points, setPoints] = useState(0);

  const handleStart = () => {
    setTestWords(initRandomTest(currentWords, isTranslationSide));
    setTestState(stateOfTest.active);
  };

  const handleEndTest = () => {
    setTestState(stateOfTest.end);
  };

  const handleEndSummary = () => {
    setUserAnswers([]);
    setPoints(0);
    setTestState(stateOfTest.start);
  };

  const checkAnswers = (answer: string, nextNumber: number) => {
    setUserAnswers([...userAnswers, answer]);
    if (checkAnswer(answer, testWords[nextNumber].correctAnswer)) {
      setPoints(points + 1);
    }
  };

  return (
    <CardTestContainer>
      {testState === stateOfTest.start && <Start handleStart={handleStart} />}
      {testState === stateOfTest.active && (
        <Active
          testWords={testWords}
          checkAnswers={checkAnswers}
          handleEndTest={handleEndTest}
        />
      )}
      {testState === stateOfTest.end && (
        <End
          testWords={testWords}
          userAnswers={userAnswers}
          points={points}
          handleEndSummary={handleEndSummary}
        />
      )}
    </CardTestContainer>
  );
};
