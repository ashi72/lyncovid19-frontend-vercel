import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from './logout-button';
import LoginButton from './login-button';

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/studentlist"
      exact
      activeClassName="router-link-exact-active"
    >
      Student List
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/gettingstarted"
      exact
      activeClassName="router-link-exact-active"
    >
      Getting Started
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const {isAuthenticated} = useAuth0();

  return (
    <Nav className = "justify-content-end">
      {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
