import React from 'react'
import {
  Navbar,
  Container,
  FormList,
  InputFormList,
  BtnList,
  SpanDetalhes,
  ContainerProducts,
  ContainerTotais,
  ContainerVenda,
  LabelSubtotalDesconto,
  FormSubtotalDesconto,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
  BtnFormaPagamento,
  BtnFinalizar,
  ContainerBusca,
  TableHead,
  ContainerSpan,
  SpanListTh
} from '../styles'
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
              <FormList>
                <InputFormList />
                <BtnList>Cancelar</BtnList>
              </FormList>
            </ContainerBusca>

            <div style={{width: '90%', color: '#9C0606', background: '#C08B8E', height: '100%' }}>

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
              <ContainerSpan>
                <SpanListTh>Tipo de Venda</SpanListTh>
              </ContainerSpan>

            </TableHead>






            </div>
          </ContainerProducts>
          <ContainerTotais>
            <SpanDetalhes> Fechamento do dia </SpanDetalhes>

            <ContainerValores>
            <LabelSubtotalDesconto>N° de Vendas:</LabelSubtotalDesconto>
              <FormSubtotalDesconto>5</FormSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
            <LabelSubtotalDesconto>Carro Chefe:</LabelSubtotalDesconto>
              <FormSubtotalDesconto>Shake Banana</FormSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
              <LabelSubtotalDesconto>Subtotais:</LabelSubtotalDesconto>
              <FormSubtotalDesconto>R$100,00</FormSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
              <LabelSubtotalDesconto>Descontos:</LabelSubtotalDesconto>
              <FormSubtotalDesconto>R$10,00</FormSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              <FormTotal>R$90,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
            <LabelValorTotal>Valor Dinheiro:</LabelValorTotal>
              <FormTotal>R$90,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
            <LabelValorTotal>Valor Cartões:</LabelValorTotal>
              <FormTotal>R$90,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
              <LabelSubtotalDesconto>Em Caixa:</LabelSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
            <BtnFormaPagamento>Aplicar</BtnFormaPagamento>
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
