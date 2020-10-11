import React from 'react'
import {
  Navbar,
  Container,
  SpanDetalhes,
  ContainerProducts,
  ContainerTotais,
  ContainerVenda,
  LabelSubtotalDesconto,
  FormSubtotalDesconto,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
  BtnFinalizar,
  ContainerBusca,
  TableHead,
  ContainerSpan,
  SpanListTh,
  SpanListTd,
  TableRow,
  DivTabela,
  ContainerSpanTotais,
  HTitulo
} from '../../styles'
import {
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

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
            <ContainerBusca>
              <HTitulo>Fluxo de Caixa </HTitulo>
            </ContainerBusca>
            <DivTabela>
              <TableHead>
                <ContainerSpan>
                  <SpanListTh>Produto</SpanListTh>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTh>Saída</SpanListTh>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTh>Estoque</SpanListTh>
                </ContainerSpan>
              </TableHead>

              <TableRow>
                <ContainerSpan>
                  <SpanListTd>Shake de Banana</SpanListTd>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTd>5 Un.</SpanListTd>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTd>27 Un.</SpanListTd>
                </ContainerSpan>
              </TableRow>

              <TableRow>
                <ContainerSpan>
                  <SpanListTd>Cookie de amendoa</SpanListTd>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTd>8 Un.</SpanListTd>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTd>13 Un.</SpanListTd>
                </ContainerSpan>
              </TableRow>

              <TableRow>
                <ContainerSpan>
                  <SpanListTd>Shake de Protein</SpanListTd>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTd>1 Un.</SpanListTd>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTd>5 Un.</SpanListTd>
                </ContainerSpan>
              </TableRow>
            </DivTabela>
          </ContainerProducts>
          <ContainerTotais>
            <SpanDetalhes> Fechamento do dia </SpanDetalhes>

            <ContainerValores>
              <ContainerSpanTotais>
                <LabelSubtotalDesconto>N° de Vendas:</LabelSubtotalDesconto>
              </ContainerSpanTotais>
              <ContainerSpanTotais>
                <FormSubtotalDesconto>5</FormSubtotalDesconto>
              </ContainerSpanTotais>
            </ContainerValores>
            <ContainerValores>
              <ContainerSpanTotais>
                <LabelSubtotalDesconto>Carro Chefe:</LabelSubtotalDesconto>
              </ContainerSpanTotais>
              <ContainerSpanTotais>
                <FormSubtotalDesconto>Cookie</FormSubtotalDesconto>
              </ContainerSpanTotais>
            </ContainerValores>

            <ContainerValores>
              <ContainerSpanTotais>
                <LabelSubtotalDesconto>Subtotais:</LabelSubtotalDesconto>
              </ContainerSpanTotais>
              <ContainerSpanTotais>
                <FormSubtotalDesconto>R$100,00</FormSubtotalDesconto>
              </ContainerSpanTotais>
            </ContainerValores>
            <ContainerValores>
              <ContainerSpanTotais>
                <LabelSubtotalDesconto>Descontos:</LabelSubtotalDesconto>
              </ContainerSpanTotais>
              <ContainerSpanTotais>
                <FormSubtotalDesconto>R$10,00</FormSubtotalDesconto>
              </ContainerSpanTotais>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              <FormTotal>R$90,00</FormTotal>
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
