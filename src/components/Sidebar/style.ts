import { Container } from "precise-ui/dist/es6";
import styled from "styled-components";
import { LinkStyled } from "../style";

export const SidebarStyled = styled(Container)`
  flex-direction: column;
  height: 100vh;
  flex: 1;
  display: flex;
  background: #379683;
  color: black;
`;

export const HeaderContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #05386b;
  font-family: sans-serif;
  font-size: 50px;
  color: #edf5e1;
  font-weight: bold;
`;

export const SidebarElements = styled.div`
  font-family: sans-serif;
  font-size: 35px;
  font-weight: bold;
  margin-top: 15%;
  justify-content: center;
  text-align: center;
  color: #edf5e1;
`;
export const BoxElement = styled(LinkStyled)`
  border: 4px solid #5CDB95;
  border-radius: 8px;
  background-color: #05386b;
  margin: 5px;
  margin-bottom: 15%;
  padding: 8px;
`;
