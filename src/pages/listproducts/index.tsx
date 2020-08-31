import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Container,
  FormList,
  InputFormList,
  BtnList,
} from "./styles";
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
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import Products from "../../components/product";

const ListProducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <div>
          <NavbarBrand href="/">
            <img src="image/logo-pdv 1.svg" alt="" />
          </NavbarBrand>
        </div>

        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Elaine
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>
              Log-Off
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
      <Container>
        <FormList>
          <InputFormList /> <BtnList>Cancelar</BtnList>
        </FormList>
        <div>
          <Products></Products>
          <Products></Products>
          <Products></Products>
          <Products></Products>
        </div>
      </Container>
    </div>
  );
};

export default ListProducts;
