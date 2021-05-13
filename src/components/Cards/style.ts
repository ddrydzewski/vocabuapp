import { styled } from "precise-ui";
import { colors } from "../../design/colorStyles/colorStyles";

export const CardsContainer = styled.div`
  margin-left: 8%;
  margin-top: 1%;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 70vh;
  left: 0;
  right: 0;
  background-color: ${colors.thirdColor};
  border: 8px solid #05386b;
  border-radius: 5px;
  overflow-y: auto;
`;

export const Icons = styled.div`
  cursor: pointer;
  margin: auto;
  display: flex;
  justify-content: center;
  font-size: 20px;
  text-align: center;
`;
