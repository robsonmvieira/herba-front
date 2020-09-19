import React, { useState } from 'react'
import { Navbar, NavbarToggler, Nav, ImgLogo } from './styles'
import Link from 'next/link'

import { Collapse, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar light expand="md">
      <NavbarBrand>
        <Link href="/">
          <ImgLogo
            style={{ cursor: 'pointer' }}
            src="image/logo-pdv.svg"
            alt="Essa é a logo do projeto no qual remete a uma mão segurado um halteres"
          />
        </Link>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto d-flex " navbar>
          <NavItem>
            <Link href="/login" passHref>
              <NavLink>Login</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/sobre" passHref>
              <NavLink>Sobre</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/help" passHref>
              <NavLink>Help Desk</NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/resetsenha" passHref>
              <NavLink>Esqueci Minha Senha</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Menu
