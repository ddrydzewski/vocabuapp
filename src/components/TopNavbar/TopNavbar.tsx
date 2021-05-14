import React from "react";
import { Badge, Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { firebaseApp } from "../../database/core";

interface IProps {
  userName: string;
}

export const TopNavbar: React.FC<IProps> = ({ userName }) => {
  const handleLogout = () => firebaseApp.auth().signOut();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#/">
        Vocabu
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#words">Words</Nav.Link>
          <NavDropdown title="Vocabu Games" id="basic-nav-dropdown">
            <NavDropdown.Item href="#test">Learn</NavDropdown.Item>
            <NavDropdown.Item href="#random">Random</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Badge style={{marginRight: "15px"}} variant="secondary">{userName}</Badge>
          <Button variant="outline-success" href="#/" onClick={handleLogout}>
            Log out
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

// {/* <HeaderContainer>
//         <LinkStyled style={{ marginLeft: "30px", padding: "15px" }}>
//           <NavLink exact to="/">
//             Vocabu
//           </NavLink>
//         </LinkStyled>
//       {/* <AuthContainer >
//         <LinkStyled>
//           <NavLink exact to="/">
//             Log in
//           </NavLink>
//         </LinkStyled>
//         <LinkStyled>
//           <NavLink exact to="/">
//             Sign up
//           </NavLink>
//         </LinkStyled>
//       </AuthContainer> */}
//     </HeaderContainer> */}
