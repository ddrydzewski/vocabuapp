import React from "react";
import {
    Box,
    Column, Container,
    Heading, Row
} from "./style";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Me</Heading>
          </Column>
          <Column>
            <Heading>Contact</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;