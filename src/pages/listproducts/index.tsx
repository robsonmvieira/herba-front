import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Container,
  FormList,
  InputFormList,
  BtnList,
  SpanDetalhes,
  ContainerProducts,
  ContainerVenda,
  LabelSubtotalDesconto,
  FormSubtotalDesconto,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
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
  Row,
} from "reactstrap";
import Product from "../../components/product";

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
        <ContainerVenda>
          <ContainerProducts>
            <Product />
            <Product />
            <Product />
            <Product />
          </ContainerProducts>
          <ContainerProducts>
            <SpanDetalhes> Detalhes da venda </SpanDetalhes>
            <ContainerValores>
              <LabelSubtotalDesconto>Subtotal:</LabelSubtotalDesconto>
              <FormSubtotalDesconto>R$100,00</FormSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
              <LabelSubtotalDesconto>Desconto:</LabelSubtotalDesconto>
              <FormSubtotalDesconto>R$10,00</FormSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              <FormTotal>R$90,00</FormTotal>
            </ContainerValores>
          </ContainerProducts>
        </ContainerVenda>
      </Container>
    </div>
  );
};

export default ListProducts;
