import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { firebaseApp } from "../../database/core";
import { StartText } from "./style";

export const Starter = () => {
  return (
    <StartText>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          {!(firebaseApp.auth().currentUser)  &&
          (
            <Button variant="primary" href="#/signin">
              Sign in
            </Button>
          )}
        </p>
      </Jumbotron>
    </StartText>
  );
};
