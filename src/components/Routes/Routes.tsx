import React from "react";
import { Route } from "react-router-dom";
import { firebaseApp } from "../../database/core";
import { SignIn } from "../Auth/SignIn";
import { CardLearn } from "../CardLearn/CardLearn";
import { Cards } from "../Cards/Cards";
import { Starter } from "../Starter/Starter";


export const Routes = () => {
  return (
    <>
      {firebaseApp.auth().currentUser ? (
        <div>
          <Route exact path="/" component={Starter} />
          <Route path="/words" component={Cards} />
          <Route path="/learn" component={CardLearn} />
        </div>
      ) : (
        <div>
          <Route exact path="/" component={Starter} />
          <Route path="/signin" component={SignIn} />
        </div>
      )}
    </>
  );
};
