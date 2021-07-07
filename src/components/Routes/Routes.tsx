import React from "react";
import { Route } from "react-router-dom";
import { SignIn } from "../Auth/SignIn";
import { CardLearn } from "../Cards/CardLearn/CardLearn";
import { CardsDisplay } from "../Cards/CardsDisplay/CardsDisplay";
import { CardTest } from "../Cards/CardTest/CardTest";
import { Starter } from "../Starter/Starter";

export const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Starter} />
      <Route path="/words" component={CardsDisplay} />
      <Route path="/learn" component={CardLearn} />
      <Route path="/test" component={CardTest} />
      <Route path="/signin" component={SignIn} />
    </div>
  );
};
