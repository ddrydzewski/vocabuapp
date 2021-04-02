import { Button, styled } from "precise-ui";

export const MainContainer = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  width: 50%;
  text-align: center;
  font-family: sans-serif;
  font-size: 25px;
`;

export const ButtonScheme = styled(Button)`
 font-family: sans-serif;
  margin-top: 15px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: white;
    box-shadow: 0 0 3px #9ecaed;
  }
  &:active {
    background-color: whitesmoke;
    box-shadow: 0 0 20px #9ecaed;
  }
`