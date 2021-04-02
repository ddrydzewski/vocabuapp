import { styled } from "precise-ui";

export const HeaderContainer = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 5px;
  width: 30%;
  text-align: center;
  font-family: sans-serif;
  font-size: 25px;
  border: 1px solid black;
  border-radius: 5px;

  a:link {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
    text-decoration: none;
  }

  a:hover {
    box-shadow: 0 0 5px coral;
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
