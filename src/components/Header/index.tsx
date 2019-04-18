import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from 'src/assets/images/logo.png';

const Header: React.SFC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <Image width={40} height={40} src={logo} />
        </Link>
      </Navbar.Brand>
      <Navbar.Text>React Starter Kit</Navbar.Text>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/demo">
            Demo
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
