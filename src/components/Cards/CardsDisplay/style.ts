import styled from "styled-components";
import { colors } from "../../../design/colorStyles/colorStyles";

export const CardsContainer = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 5px;
  background-color: ${colors.primeColor};
  border: 2px solid ${colors.secondaryColor};
  border-radius: 5px;
  text-align: center;
  width: 75%;
  height: 75vh;
  overflow-y: auto;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.12), 0 8px 12px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const AddButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-top: 3px;
  margin-bottom: 2px;
  width: 3%;

  &:hover {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
    }
  }
`;

export const Icons = styled.div`
  cursor: pointer;
  margin: auto;
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-align: center;
`;

export const CardsPageNumber = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
`;