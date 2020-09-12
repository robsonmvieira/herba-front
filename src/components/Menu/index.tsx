import React, { useState } from "react";
import { Navbar, NavbarToggler, Nav, ImgLogo } from "./styles";
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
  Row,
} from "reactstrap";
import { reverse } from "dns";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarBrand href="/login">
        <ImgLogo src="image/logo-pdv.svg" alt="" />
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto d-flex " navbar>
          <NavItem>
            <NavLink href="/sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/help">Help Desk</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/resetsenha">Esqueci Minha Senha</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
