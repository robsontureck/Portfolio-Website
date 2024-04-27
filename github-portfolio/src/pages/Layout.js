import React, { useState } from "react";
import "../styles/Layout.css";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Layout = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar expand="lg" {...args}>
        <NavbarBrand href="/">GitHub Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Button
                color="danger"
                tag={NavLink}
                exact
                to="/"
                onClick={() => setIsOpen(false)}
                activeClassName="active"
              >
                Home
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="danger"
                tag={NavLink}
                to="/about"
                onClick={() => setIsOpen(false)}
                activeClassName="active"
              >
                About
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="danger"
                tag={NavLink}
                to="/resume"
                onClick={() => setIsOpen(false)}
                activeClassName="active"
              >
                Resume
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="danger"
                tag={NavLink}
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                activeClassName="active"
              >
                Portfolio
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
