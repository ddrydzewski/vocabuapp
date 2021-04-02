import { Button, Container, styled } from "precise-ui";

export const AllWordsContainer = styled(Container)`
  margin: auto;
  width: 50%;
  background-color: whitesmoke;
`;

export const AddButton = styled(Button)`
  margin: auto;
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
  display: flex;
  color: black;
  justify-content: center;
  width: 5%;
  height: 5%;
  margin-bottom: 5px;
  padding: 5px;

  &:hover {
    color: red;
  }
`;
