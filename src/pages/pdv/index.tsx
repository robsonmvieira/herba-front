import React, { useCallback, useState } from 'react'
// import { formatUserName } from '../../utils/formatUserName'
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
  SpanListTd,
  TableRowPdv,
  ContainerTabelaPdv,
  DivListTd,
  ContainerSpanTh,
  SpanListTdOut,
  DivListTdImg,
  ContainerSpanThBtn,
  ContainerSpanThNumber,
  DivListTdOut
} from './styles'
import { NavbarBrand, UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import apiService from '../../services/apiService'
import Product from '../../components/product'
import { useRouter } from 'next/router'
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
  const { pages } = params.query
  if (pages) {
    const response = await apiService.get<Product[]>(
      `/products?pages=${pages}`
      // {
      //   // headers: { cookie: cookie || '' }
      // }
    )
    const productsList = response.data
    // const userName = formatUserName(cookie)
    return { props: { productsList } }
  }
  const response = await apiService.get<Product[]>(
    `/products?pages=${0}`
    // {
    //   // headers: { cookie: cookie || '' }
    // }
  )
  const productsList = response.data
  // const userName = formatUserName(cookie)
  return { props: { productsList } }
}

const ListProducts = ({
  productsList
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [products, setProducts] = useState(productsList)
  const [termOfFind, setTermOfFind] = useState('')

  let currentPage = router.query.pages ? Number(router.query.pages) : 1

  // function searchProducHandler(e) {

  // }

  const nextProducts = useCallback(async () => {
    // verify if current page is 0 or NaN
    if (currentPage <= 0 || currentPage !== Number(currentPage)) {
      const response = await apiService.get(`/products?pages=${1}`)
      currentPage++
      setProducts(response.data)
    }

    // verify if current page is equal 1
    if (currentPage === 1) {
      const response = await apiService.get(
        `/products?pages=${currentPage + 1}`
      )
      currentPage++
      setProducts(response.data)
    } else {
      // then current page is biggest than one
      const response = await apiService.get(
        `/products?pages=${currentPage + 1}`
      )
      currentPage++
      setProducts(response.data)
    }
  }, [currentPage])

  const previusPage = useCallback(async () => {
    // verify if current page is one or NaN
    if (currentPage === 1 || currentPage !== Number(currentPage)) {
      const response = await apiService.get(`/products?pages=${1}`)
      // currentPage++
      setProducts(response.data)
    } else {
      // then current page is bigger than one
      const response = await apiService.get(
        `/products?pages=${currentPage - 1}`
      )
      currentPage--
      setProducts(response.data)
    }
  }, [currentPage])

  const searchProductHandler = useCallback(async termOfFind => {
    const cacheProducts = products
    const response = await apiService.get(
      `/associates/productByLike/?terms=${termOfFind}`
    )
    setTermOfFind(termOfFind)
    setProducts(response.data)
    if (termOfFind.length === 0) {
      setProducts(cacheProducts)
    }
  }, [])

  return (
    <div>
      <Navbar light expand="ml">
        <div>
          <NavbarBrand href="/">
            <img src="image/logo-pdv.svg" alt="" />
          </NavbarBrand>
        </div>

        <UncontrolledDropdown setActiveFromChild>
          <p style={{ color: '#fff' }}>John Doe</p>
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
                <InputFormList
                  onChange={e => searchProductHandler(e.target.value)}
                />
                <BtnList>Cancelar</BtnList>
              </FormList>
            </ContainerBusca>

            <DivTabela>
              
                <ContainerSpanTh>
                  <SpanListTh>Nome</SpanListTh>
                </ContainerSpanTh>
                <ContainerSpanThNumber>
                  <SpanListTh>Preço</SpanListTh>
                </ContainerSpanThNumber>
                <ContainerSpanThNumber>
                  <SpanListTh>Qtd.</SpanListTh>
                </ContainerSpanThNumber>
                <ContainerSpanThNumber>
                  <SpanListTh>Desc</SpanListTh>
                </ContainerSpanThNumber>
                <ContainerSpanThNumber>
                  <SpanListTh>Sub</SpanListTh>
                </ContainerSpanThNumber>
                <ContainerSpanThBtn>
                  <SpanListTh></SpanListTh>
                </ContainerSpanThBtn>
                <ContainerSpanThBtn>
                  <SpanListTh></SpanListTh>
                </ContainerSpanThBtn>
              
            </DivTabela>
            <ContainerTabelaPdv>
              <TableRowPdv>
                {products.map((p: Product) => (
                  <ContainerSpan key={p.id}>
                    <DivListTd> {p.name} </DivListTd>
                    
                    
                    <DivListTdOut> {p.price_suggest} </DivListTdOut>
                                        
                    <DivListTdOut>
                      <input style={{ width: '40px' }} name="qtd" />
                    </DivListTdOut>
                    <DivListTdOut>
                    <SpanListTdOut> {p.price_suggest} </SpanListTdOut>
                    </DivListTdOut>
                    <DivListTdOut>
                    <SpanListTdOut> {p.price_suggest} </SpanListTdOut>
                    </DivListTdOut>
                    <DivListTdImg>
                    <img src="/image/adicionar.svg" alt=""/>
                    </DivListTdImg>
                    <DivListTdImg>
                    <img src="/image/lixeirapdv.svg" alt=""/>
                      </DivListTdImg>
                  </ContainerSpan>
                  
                ))}
                <div>
                  <button onClick={previusPage}>anterior</button>
                  <button onClick={nextProducts}>Próximo</button>
                </div>
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
