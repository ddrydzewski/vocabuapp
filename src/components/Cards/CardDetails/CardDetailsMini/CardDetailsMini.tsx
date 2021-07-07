import React from "react";
import { Card } from "react-bootstrap";
import { CardNote } from "../../CardNote/CardNote";
import { NoteContainer } from "../style";
import { CardContainerMini, WordContainerMini } from "./style";

interface IProps {
  word: string;
  note?: string;
}

export const CardDetailsMini: React.FC<IProps> = ({ word, note }) => {
  return (
    <CardContainerMini>
      <Card className="text-center">
        <Card.Body
          style={{
            cursor: "default",
            borderRadius: "3px",
            height: "100px",
          }}
        >
          <Card.Title>
            <WordContainerMini>{word}</WordContainerMini>
            <NoteContainer>
              {note && note?.length > 0 && <CardNote note={note} />}
            </NoteContainer>
          </Card.Title>
        </Card.Body>
      </Card>
    </CardContainerMini>
  );
};
