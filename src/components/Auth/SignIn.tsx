import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { authUIConfig } from "../../config/auth";

export const SignIn = () => {
  return (
    <StyledFirebaseAuth
      uiConfig={authUIConfig}
      firebaseAuth={firebase.auth()}
    />
  );
};
