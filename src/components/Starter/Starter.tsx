import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { firebaseApp } from "../../database/core";
import { StartText } from "./style";

export const Starter = () => {
  return (
    <StartText>
      <Jumbotron>
        <h1>Vocabu</h1>
        <h2>Simple flashcards</h2>
        <br />
        <p>
          {!firebaseApp.auth().currentUser ? (
            <Button variant="primary" href="#/signin">
              Sign in
            </Button>
          ) : (
            <div>
              Welcome <b>{firebaseApp.auth().currentUser?.displayName}</b>
            </div>
          )}
        </p>
      </Jumbotron>
    </StartText>
  );
};
