import React from "react";
import { Route } from "react-router-dom";
import { CardRandom } from "../CardRandom/CardRandom";
import { Cards } from "../Cards/Cards";
import { Starter } from "../Starter/Starter";

export const Routes = () => {
  return (
    <div>
      <div>
        <Route exact path="/" component={Starter} />
        <Route path="/words" component={Cards} />
        <Route path="/random" component={CardRandom} />
      </div>
    </div>
  );
};
