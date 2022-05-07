import React from 'react';
import logo from './logo.svg';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Nbar = () => {
  return (
    <>
     <Navbar>
  <Container>
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="66"
        height="66"
        className="d-inline-block align-top"
        alt="Credit Skinny Logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/services">Services</Nav.Link>
    <Nav.Link href="/sign-up">Sign Up</Nav.Link>
    </Nav>
    <Button variant="light" href="/sign-in">Sign In</Button>
  </Container>
  </Navbar>
    </>
  );
};

export default Nbar;
