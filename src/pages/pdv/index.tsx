import React, { useState } from 'react'
import { formatUserName } from '../../utils/formatUserName'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
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
  DropdownItem,
  DropdownMenu,
  TableHead,
  DivTabela,
  ContainerSpan,
  SpanListTh,
  TableRow,
  SpanListTd,
  TableRowPdv,
  ContainerTabelaPdv
} from './styles'
import { NavbarBrand, UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import apiService from '../../services/apiService'
import Product from '../../components/product'

interface Product {
  id: string
  name: string
  sku: string
  price_suggest: string
}

export const getServerSideProps: GetServerSideProps = async params => {
  // const cookie = params.req.headers.cookie
  // if (!cookie) {
  //   console.log('Não tenho...')
  //   params.res.writeHead(302, {
  //     Location: '/login'
  //   })
  //   params.res.statusCode = 302
  //   params.res.setHeader('Location', '/login')
  //   params.res.end()
  //   return { props: {} }
  // }
  // if (params.res.statusCode === 401 && !params.req) {
  //   params.res.statusCode = 302
  //   params.res.setHeader('Location', '/login')
  //   // params.res.writeHead(302, {
  //   //   Location: '/login'
  //   // })
  //   params.res.end()
  //   return { props: {} }
  // }
  // if (params.res.statusCode === 401 && params.req) {
  //   params.res.statusCode = 302
  //   params.res.setHeader('Location', '/login')
  //   // params.res.writeHead(302, {
  //   //   Location: '/login'
  //   // })
  //   params.res.end()
  //   return { props: {} }
  // }
  const response = await apiService.get<Product[]>('/products?pages=1', {
    // headers: { cookie: cookie || '' }
  })
  const products = response.data
  // const userName = formatUserName(cookie)
  console.log(products)
  return { props: { products } }
}
const ListProducts = ({
  products,
  userName
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
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
          <p style={{ color: '#fff' }}>{userName}</p>
          <DropdownToggle tag="a" className="nav-link" caret></DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" active>
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

            <DivTabela>
              <TableHead>
                <ContainerSpan>
                  <SpanListTh>Produto</SpanListTh>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTh>Preço</SpanListTh>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTh>Qtd.</SpanListTh>
                </ContainerSpan>
                <ContainerSpan>
                  <SpanListTh>Excluir</SpanListTh>
                </ContainerSpan>
              </TableHead>
            </DivTabela>
            <ContainerTabelaPdv>
              <TableRowPdv>
                {products.map((p: Product) => (
                  <ContainerSpan key={p.id}>
                    <SpanListTd> {p.name} </SpanListTd>
                    <SpanListTd> {p.price_suggest} </SpanListTd>
                    <SpanListTd>
                      <input style={{ width: '40px' }} name="qtd" />
                    </SpanListTd>
                  </ContainerSpan>
                ))}
              </TableRowPdv>
            </ContainerTabelaPdv>
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
