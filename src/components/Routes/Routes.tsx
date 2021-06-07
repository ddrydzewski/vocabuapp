import React from "react";
import { Route } from "react-router-dom";
import { SignIn } from "../Auth/SignIn";
import { CardLearn } from "../CardLearn/CardLearn";
import { Cards } from "../Cards/Cards";
import { Starter } from "../Starter/Starter";

export const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Starter} />
      <Route path="/words" component={Cards} />
      <Route path="/learn" component={CardLearn} />
      <Route path="/signin" component={SignIn} />
    </div>
  );
};
