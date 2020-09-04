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

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarBrand href="/login">
        <img src="image/logo-pdv 1.svg" alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto d-flex " navbar>
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
  );
};

export default Menu;
