import React from "react";
import { Route } from "react-router-dom";
import { CardLearn } from "../CardLearn/CardLearn";
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
        <Route path="/test" component={CardLearn} />
      </div>
    </div>
  );
};
