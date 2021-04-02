import { Button, styled } from "precise-ui";

export const MainContainer = styled.div`
  margin: auto;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: #05386b;
  font-family: sans-serif;
  font-size: 25px;
`;

export const HaOneStyled = styled.h1`
  margin-left: 15%;
  color: #edf5e1;
`;

export const HaTwoStyled = styled.h2`
  color: #edf5e1;
`;

export const ButtonScheme = styled(Button)`
  font-family: sans-serif;
  margin-top: 15px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  background-color: #8ee4af;
  &:hover {
    box-shadow: 0 0 3px #05386b;
  }
  &:active {
    background-color: #379683;
    box-shadow: 0 0 20px #05386b;
  }
`;
