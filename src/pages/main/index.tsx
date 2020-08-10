import React, { useState } from "react";
import { Navbar, NavbarToggler, Nav } from "./styles";
import {
  Collapse,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src="image/logo-pdv 1.svg" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Esqueci Minha Senha</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Sobre
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Help Desk
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Main;