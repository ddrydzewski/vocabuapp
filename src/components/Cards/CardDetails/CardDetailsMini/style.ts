import styled from "styled-components";
import { colors } from "../../../../design/colorStyles/colorStyles";

export const CardContainerMini = styled.div`
  background-color: ${colors.primeColor};
  border-radius: 5px;
  margin: auto;
  margin-top: 12px;
  margin-bottom: 1rem;
  display: inline-block;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12), 0 3px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const WordContainerMini = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #05386b;
`;

