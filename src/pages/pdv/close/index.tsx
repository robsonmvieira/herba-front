import React from 'react'
import {
  Navbar,
  Container,
  ContainerProducts,
  ContainerVenda,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
  BtnFinalizar,
  ContainerBusca,
  HTitulo,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  BoxDetalhes,
  Detalhes,
  Label,
  Descricao,
  ContainerTotais,
  ContainerIconsLg,
  ContainerTags,
  IconsTags,
  ContainerSpan,
  LabelClienteDashboard,
  LabelDescricaoDashboard, 
  LabelClienteDashboardMenos,
  FormTotalCustomColor
   
} from '../styles'
import { NavbarBrand } from 'reactstrap'

const CloseBox = () => {
  return (
    <div>
      <Navbar light expand="ml">
        <div>
          <NavbarBrand href="/">
            <img src="image/logo-pdv.svg" alt="" />
          </NavbarBrand>
        </div>

        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Barbara C.
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>
              Log-Off
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
      <Container>
        <ContainerVenda>
          <ContainerProducts>
            

            <ContainerIconsLg>
            <ContainerTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboard>R$15,00</LabelClienteDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Venda no Dinheiro
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboard>R$15,00</LabelClienteDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                  Venda no Débito
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboardMenos>R$15,00</LabelClienteDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                  Venda no Crédito
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
             
            </ContainerTags>
          </ContainerIconsLg>
           
          </ContainerProducts>



         
            <ContainerTotais>
            <BoxDetalhes>
                <Detalhes>Vendas:</Detalhes>
              </BoxDetalhes>

              <ContainerValores>
                <Label>N° de Vendas:</Label>
                <Descricao>5</Descricao>
              </ContainerValores>
            <ContainerValores>
                <Label>Carro Chefe:</Label>
                <Descricao>Cookie</Descricao>
            </ContainerValores>

            <ContainerValores>
              <Label>
                Subtotais:
              </Label>
              <Descricao>
                R$100,00
              </Descricao>
            </ContainerValores>

            <ContainerValores>
              
                <Label>Descontos:</Label>
              
                <Descricao>R$10,00</Descricao>
             
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              <FormTotalCustomColor>R$90,00</FormTotalCustomColor>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Dinheiro:</LabelValorTotal>
              <FormTotal>R$50,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Cartões:</LabelValorTotal>
              <FormTotal>R$40,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
              <BtnFinalizar>Fechar Caixa</BtnFinalizar>
            </ContainerValores>
          </ContainerTotais>
        </ContainerVenda>
      </Container>
    </div>
  )
}

export default CloseBox
