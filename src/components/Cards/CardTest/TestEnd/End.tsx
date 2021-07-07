import React from "react";
import { Button, Table } from "react-bootstrap";
import { ITestWords } from "../../../../types/ITestWords";
import { checkAnswer } from "../../../../utilts/checkSomething/checkAnswer";
import { SummaryContainer, TableContainer } from "../style";

interface IProps {
    testWords: ITestWords[];
    userAnswers: string[];
    points: number;
    handleEndSummary: () => void;
}

export const End: React.FC<IProps> = ({testWords, userAnswers, points, handleEndSummary}) => {
  return (
    <div>
      <TableContainer>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Words</th>
              <th>Correct Answer</th>
              <th>Your Answer</th> 
            </tr>
          </thead>
          <tbody>
            {testWords.map((val, index) => (
              <tr>
                <td>{val.base}</td>
                <td
                  style={{
                    backgroundColor: checkAnswer(
                      userAnswers[index],
                      val.correctAnswer
                    )
                      ? "#6cfd00"
                      : "#fc0040",
                  }}
                >
                  {val.correctAnswer}
                </td>
                <td
                  style={{
                    backgroundColor: checkAnswer(
                      userAnswers[index],
                      val.correctAnswer
                    )
                      ? "#6cfd00"
                      : "#fc0040",
                  }}
                >
                  {userAnswers[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <SummaryContainer>
        {points === 1 ? (
          <div>You got {points} point</div>
        ) : (
          <div>You got {points} points</div>
        )}
        <div>{Math.round((points / testWords.length) * 100)} %</div>
      </SummaryContainer>
      <div>
        <Button onClick={handleEndSummary}>End of Test</Button>
      </div>
    </div>
  );
};
