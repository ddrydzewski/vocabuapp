import { Button, styled } from "precise-ui";

export const RandomContainer = styled.div`
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 50%;
  text-align: center;
  font-family: sans-serif;
  font-size: 25px;
  padding: 15px;
`;

export const RandomButton = styled(Button)`
  font-family: sans-serif;
  margin-top: 15px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: white;
    box-shadow: 0 0 10px #9ecaed;
  }
  &:active {
    box-shadow: 0 0 20px #9ecaed;
  }
`;

export const RandomWord = styled.div`
  font-family: sans-serif;
  font-size: 25px;
  margin-top: 15px;
`;
