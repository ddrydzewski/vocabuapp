import styled from "styled-components";
import { colors } from "../design/colorStyles/colorStyles";

export const LinkStyled = styled.div`
  a:link {
    color: ${colors.darkColor};
    text-decoration: none;
  }
  a:visited {
    color: ${colors.darkColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;