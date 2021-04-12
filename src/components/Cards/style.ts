import { styled } from "precise-ui";
import { ButtonScheme } from "../style";

export const CardsContainer = styled.div`
  margin: auto;
  margin-top: 1%;
  flex-direction: column;
  position: fixed;
  width: 50%;
  height: 50%;
  left: 0;
  right: 0;
  background-color: #379683;
  border: 8px solid #05386b;
  border-radius: 5px;
  position: fixed;
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
  display: flex;
  margin-top: 5px;
  justify-content: center;
  font-size:20px;
  text-align:center;
`;
