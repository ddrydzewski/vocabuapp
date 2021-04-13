import styled from "styled-components";

export const ButtonScheme = styled.button`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  padding: 5px;
  border-radius: 5px;
  color: #edf5e1;
  background-color: #05386b;
  &:hover {
    box-shadow: 0 0 3px #05386b;
  }
  &:active {
    background-color: #8ee4af;
    box-shadow: 0 0 20px #05386b;
  }
`;

export const LinkStyled = styled.div`
  a: {
    display: block;
  }

  a:link {
    color: #edf5e1;
    text-decoration: none;
  }

  a:visited {
    color: #edf5e1;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;
