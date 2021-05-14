import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { firebaseApp } from "../../database/core";

export const TopNavbar = () => {
  const handleLogout = () => firebaseApp.auth().signOut();
  const [userName, setUserName] = useState<string | undefined | null>(
    "Hey buddy"
  );

  useEffect(() => {
    setUserName(firebaseApp.auth().currentUser?.displayName);
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        href="#/"
        style={{ fontWeight: "bold", fontSize: "22px", marginLeft: "10px" }}
      >
        Vocabu
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {firebaseApp.auth().currentUser ? (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: "15px" }}>
            <Nav.Link href="#words">Words</Nav.Link>
            <NavDropdown title="Vocabu Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="#learn">Learn</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Badge style={{ marginRight: "15px" }} variant="secondary">
              {userName}
            </Badge>
            <Button variant="outline-success" href="#/" onClick={handleLogout}>
              Log out
            </Button>
          </Form>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: "15px" }}>
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
          <Form inline>
            <Badge style={{ marginRight: "15px" }} variant="secondary">
              Hey buddy
            </Badge>
            <Button variant="outline-success" href="#signin">
              Sign in
            </Button>
          </Form>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

// {/* <NavDropdown.Divider />
// <NavDropdown.Item>Separated link</NavDropdown.Item> */}
