import React, { useCallback, useState } from 'react'
// import { formatUserName } from '../../utils/formatUserName'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import {
  Navbar,
  Container,
  FormList,
  InputFormList,
  BtnList,
  Detalhes,
  ContainerProducts,
  ContainerTotais,
  ContainerVenda,
  Label,
  Descricao,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
  BtnFormaPagamento,
  BtnFinalizar,
  ContainerBusca,
  DropdownItem,
  DropdownMenu,
  Tr,
  TrBody,
  Th,
  TBody,
  TabelaBody,
  BoxCustomName,
  Whapper,
  Td,
  TdCustomImage,
  WhapperCustomBtn,
  WhapperCustomNumber,
  BoxBodyNumbers,
  InputPdv,
  BtnPreviosNext,
  DivBtnPreviusNext,
  UncontrolledDropdown,
  UserName,
  ContainerTh,
  DropdownToggle,
  BoxDetalhes,
  Select
} from './styles'
import { NavbarBrand  } from 'reactstrap'
import apiService from '../../services/apiService'
import Product from '../../components/product'
import { useRouter } from 'next/router'
// import { nextPagePagination } from '../../utils/nexPagePagination'
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
    // nextPagePagination(currentPage, apiService, setProducts)
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
        <UserName>John Doe</UserName>
          <DropdownToggle tag="a" className="nav-link" caret></DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" active>
              Fechar Caixa
            </DropdownItem>
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

          <ContainerTh>
            <Tr>
              
                <Whapper>
                  <Th>Nome</Th>
                </Whapper>
                <WhapperCustomNumber>
                  <Th>Preço</Th>
                </WhapperCustomNumber>
                <WhapperCustomNumber>
                  <Th>Qtd.</Th>
                </WhapperCustomNumber>
                <WhapperCustomNumber>
                  <Th>Desc</Th>
                </WhapperCustomNumber>
                <WhapperCustomNumber>
                  <Th>Sub</Th>
                </WhapperCustomNumber>
                <WhapperCustomBtn />
                <WhapperCustomBtn />
              
            </Tr>
          </ContainerTh>
            <TabelaBody>
              <TBody>
                {products.map((p: Product) => (
                  <TrBody key={p.id}>
                    <BoxCustomName><Td> {p.name}</Td></BoxCustomName>
                    
                    
                    <BoxBodyNumbers><Td> {p.price_suggest} </Td> </BoxBodyNumbers>
                                        
                    <BoxBodyNumbers>
                    <InputPdv name="qtd" />
                    </BoxBodyNumbers>
                    <BoxBodyNumbers>
                    <Td> {p.price_suggest} </Td>
                    </BoxBodyNumbers>
                    <BoxBodyNumbers>
                    <Td> {p.price_suggest} </Td>
                    </BoxBodyNumbers>
                    <TdCustomImage>
                    <img src="/image/adicionar.svg" alt=""/>
                    </TdCustomImage>
                    <TdCustomImage>
                    <img src="/image/lixeirapdv.svg" alt=""/>
                      </TdCustomImage>
                  </TrBody>                  
                ))}


                <DivBtnPreviusNext >
                  <BtnPreviosNext onClick={previusPage}><img src="/image/left.svg" /> anterior</BtnPreviosNext>
                  <BtnPreviosNext onClick={nextProducts}> Próximo <img src="/image/right.svg" /></BtnPreviosNext>
                </DivBtnPreviusNext>


              </TBody>
            </TabelaBody>
          </ContainerProducts>

          <ContainerTotais>
            <BoxDetalhes>
            <Detalhes> Detalhes da venda </Detalhes>
            </BoxDetalhes>
            <ContainerValores>
              <Label>Subtotal:</Label>
              <Descricao>R$100,00</Descricao>
            </ContainerValores>
            <ContainerValores>
              <Label>Desconto:</Label>
              <Descricao>R$10,00</Descricao>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              <FormTotal>R$90,00</FormTotal>
            </ContainerValores>

            <ContainerValores>
              <LabelValorTotal>Cliente:</LabelValorTotal>
              <Select name="clientes">
              <option></option>
              <option>Jhon Papa August</option>
              <option>Mary Firmanet </option>
              <option>Helvis Fort de Conceição</option>
              
              </Select>
            </ContainerValores>

            <ContainerValores>
              <Label>Ultima compra:</Label>
              <Descricao>10/08/2020</Descricao>
            </ContainerValores>



            <ContainerValores>
              <Label>Desconto disponivel:</Label>
              <Select name="Desconto">
              <option>0% </option>
              <option>25% </option>
              <option>35%</option>
              <option>55%</option>
              </Select>
            </ContainerValores>


            <ContainerValores>
              <Label>Pontuação:</Label>
              <Descricao>540</Descricao>
            </ContainerValores>
            
            <ContainerValores>
              <Label>Formas de Pagamento</Label>
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
