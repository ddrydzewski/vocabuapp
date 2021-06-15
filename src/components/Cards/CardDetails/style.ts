import { styled } from "precise-ui";
import { colors } from "../../../design/colorStyles/colorStyles";

export const CardContainer = styled.div`
  background-color: ${colors.primeColor};
  border-radius: 5px;
  margin: auto;
  margin-top: 12px;
  margin-bottom: 1rem;
  overflow-wrap: break-word;
  width: 200px;
  position: relative;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12), 0 3px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);
  }
`;

export const WordContainer = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #05386b;
`;

export const IconContainer = styled.div`
  display: inline-block;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  margin-right: 5px;
  margin-bottom: 5px;
  bottom: 0;
  right: 0;
`;

export const NoteContainer = styled.div`
  position: absolute;
  margin-left: 5px;
  font-size: 20px;
  bottom: 0;
  left: 0;
`;
