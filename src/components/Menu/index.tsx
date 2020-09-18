import React, { useState } from "react";
import { Navbar, NavbarToggler, Nav, ImgLogo } from "./styles";
import Link from 'next/link'

import {
  Collapse,
  NavbarBrand,
  NavItem,
  NavLink
} from "reactstrap";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarBrand>
        <Link href="/">
        <ImgLogo src="image/logo-pdv.svg" alt="Essa é a logo do projeto no qual remete a uma mão segurado um halteres" />
        </Link>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto d-flex " navbar>
          <NavItem>

            <NavLink>
              <Link href="/login">
                <a style={{textDecoration:'none', color:"#fff"}}>Login</a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sobre">
              <Link href="sobre">
                <a style={{textDecoration:'none', color:"#fff"}}>Sobre</a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
              <Link href="/help">
                <a style={{textDecoration:'none', color:"#fff"}}>Help Desk</a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link href="/resetsenha">
                <a style={{textDecoration:'none', color:"#fff"}}> Esqueci Minha Senha</a>
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
