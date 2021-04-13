import { styled } from "precise-ui";
import { ButtonScheme } from "../style";

export const CardsContainer = styled.div`
  margin: auto;
  justify-content: center;
  flex-direction: column;
  width: 143vh;
  height: 75vh;
  left: 0;
  right: 0;
  background-color: #379683;
  border: 8px solid #05386b;
  border-radius: 5px;
  overflow-y: auto;
`;

export const AddButton = styled(ButtonScheme)`
  margin: auto;
  text-align: center;
  display: flex;
  width: 10%;
  justify-content: center;
  margin-top: 35px;
  padding: 5px;
`;

export const Icons = styled.div`
  margin: auto;
  cursor: pointer;
  display: flex;
  margin-top: 5px;
  justify-content: center;
  font-size:20px;
  text-align:center;
`;
