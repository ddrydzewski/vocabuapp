import { colors, Icon } from "precise-ui/dist/es6";
import { NavLink } from "react-router-dom";
import { firebaseApp } from "../../database/core";
import { BoxElement, SidebarElements, SidebarStyled } from "./style";

export const Sidebar = () => {
  const handleLogout = () => firebaseApp.auth().signOut();

  return (
    <SidebarStyled>
      <SidebarElements>
        <BoxElement>
          <NavLink to="/words">Words</NavLink>
        </BoxElement>
        <BoxElement>
          <NavLink to="/random">Random</NavLink>
        </BoxElement>
        <BoxElement>
          <NavLink to="/test">Test</NavLink>
        </BoxElement>
        <Icon
          name="PowerSettingsNew"
          color={colors.skyBlue2}
          size={1.25}
          onClick={handleLogout}
        />
      </SidebarElements>
    </SidebarStyled>
  );
};
