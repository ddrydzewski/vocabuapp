import { styled, TextField } from "precise-ui";
import { black } from "precise-ui/dist/es6/colors";
import { colors } from "../../../design/colorStyles/colorStyles";

export const ModalStyles = {
  overlay: {
    margin: "auto",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },

  content: {
    color: black,
    fontSize: "22px",
    width: "26rem",
    bottom: "auto",
    background: "#edf5e1",
    borderColor: "black",
  },
};

export const StyledTextFieldWrapper = styled.div`
  margin-bottom: 0.5rem;
  background-color: ${colors.primeColor};
`;

export const StyledTextField = styled(TextField)`
  color: black;
  overflow-wrap: normal;
  word-break: keep-all;
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
