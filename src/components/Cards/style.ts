import { styled } from "precise-ui";

export const CardsContainer = styled.div`
  margin: auto;
  margin-bottom: 15px;
  justify-content: center;
  width: 100%;
  height: 70vh;
  overflow-y: auto;
`;

export const AddButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin: auto;
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
  font-size: 20px;
  text-align: center;
`;

export const CardsPageNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
`;