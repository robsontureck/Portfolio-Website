import React, { useState } from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
