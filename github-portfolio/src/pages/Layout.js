import React, { useState } from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Layout = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Is Open?", !isOpen); // Check if this logs true/false as expected when clicked
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
