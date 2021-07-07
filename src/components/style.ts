import styled from "styled-components";

export const ButtonStyled = styled.div`
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 5%;
  margin-top: 10px;
  margin-bottom: 10px;

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
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
`;
