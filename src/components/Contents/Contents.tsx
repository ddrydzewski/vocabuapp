import React from "react";
import { Route } from "react-router-dom";
import { AllWords } from "../Vocabulary/AllWords/AllWords";
import { Random } from "../Vocabulary/Random/Random";

export const Contents = () => {
  return (
    <div>
      <div>
        <Route exact path="/" component={AllWords} />
        <Route path="/random" component={Random} />
      </div>
    </div>
  );
};
