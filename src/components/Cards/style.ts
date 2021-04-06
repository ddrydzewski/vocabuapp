import { styled } from "precise-ui";
import { ButtonScheme } from "../style";

export const CardsContainer = styled.div`
  margin: auto;
  flex-direction: column;
  position: fixed;
  width: 50%;
  height: 50%;
  margin: 2% auto;
  left: 0;
  right: 0;
  background-color: #379683;
  border: 8px solid #05386B;
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
