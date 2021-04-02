import { styled } from "precise-ui";

export const HeaderContainer = styled.div`
  margin: auto;
  padding: 3px;
  width: 15%;
  background-color: #379683;
  text-align: center;
  font-family: sans-serif;
  font-size: 25px;
  border: 2px solid #05386b;
  border-radius: 5px;
  background-color: #379683;

  a:link {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
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
  margin: 0;
  padding: 15px;
`;
