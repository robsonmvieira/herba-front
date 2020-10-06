/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import api from '../../services/api'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

// import { NextFunctionComponent } from 'next'
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
  ContainerBusca
} from './styles'
import {
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import TableProducts from '../tableproducts'
import Product from '../../components/product'

interface Product {
  id: string
  name: string
  sku: string
  price: string
}
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await api.get('products')
//   const products: Product[] = res.data

//   // console.log(productsList)
//   return {
//     props: {
//       products
//     }
//   }
// }
// const ListProducts = ({
//   products
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
const ListProducts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
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
        <ContainerVenda>
          <ContainerProducts>
            <ContainerBusca>
              <FormList>
                <InputFormList /> <BtnList>Cancelar</BtnList>
              </FormList>
            </ContainerBusca>
            {/* {products.map((p: Product) => (
              <Product key={p.id} title={p.name} price={p.price} />
            ))} */}
            {/* <Product />
            <Product /> */}

            {/* <TableProducts /> */}
          </ContainerProducts>
          <ContainerTotais>
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
            <ContainerValores>
              <LabelSubtotalDesconto>Formas de Pagamento</LabelSubtotalDesconto>
            </ContainerValores>
            <ContainerValores>
              <BtnFormaPagamento>Dinheiro</BtnFormaPagamento>
            </ContainerValores>
            <ContainerValores>
              <BtnFormaPagamento>Débito</BtnFormaPagamento>
            </ContainerValores>
            <ContainerValores>
              <BtnFormaPagamento>Crédito</BtnFormaPagamento>
            </ContainerValores>

            <ContainerValores>
              <BtnFinalizar>Finalizar</BtnFinalizar>
            </ContainerValores>
          </ContainerTotais>
        </ContainerVenda>
      </Container>
    </div>
  )
}

export default ListProducts
