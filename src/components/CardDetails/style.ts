import { styled } from "precise-ui";
import { colors } from "../../design/colorStyles/colorStyles";

export const CardContainer = styled.div`
  background-color: ${colors.primeColor};
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  height: 125px;
  margin: auto;
  padding-top: 3%;
  margin-top: 12px;
  margin-left:18px; 
  margin-bottom: 1rem;
  margin-right: 1rem;
  display: inline-block;
  background-image: url("../../design/backgrounds/gray-lines.png");
  width: 250px;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12), 0 3px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);
  }
`;

export const WordContainer = styled.div`
  font-size: 25px;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  color: #05386b;
  display: block;
`;

export const IconContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  flex-shrink: 0;
  display: block;
`;
