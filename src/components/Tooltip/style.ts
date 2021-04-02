import { styled } from "precise-ui";

export const HeaderContainer = styled.div`
  margin: auto;
  width: 100%;
  background-color: #379683;
  text-align: center;
  font-family: sans-serif;
  font-size: 35px;
  background-color: #379683;
  padding-top: 0.1rem;

  a:link {
    color: #EDF5E1;
    text-decoration: none;
  }

  a:visited {
    color: #EDF5E1;
    text-decoration: none;
  }

  a:hover {
    color: #05386b;
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;

export const ListItems = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  font-family: sans-serif;
  display: inline;
  list-style-type: none;
  margin: auto;
  padding-left: 35px;
  font-weight: bold;
`;
