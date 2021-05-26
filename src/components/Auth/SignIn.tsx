import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { authUIConfig } from "../../config/auth";
import { firebaseApp } from "../../database/core";
import { Starter } from "../Starter/Starter";

export const SignIn = () => {
  return (
    <div>
      {firebaseApp.auth().currentUser ? (
        <div>
          <Starter />
        </div>
      ) : (
        <StyledFirebaseAuth
          uiConfig={authUIConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};
