/* eslint-disable indent */
import React, { useCallback, useState, useRef, useEffect } from 'react'
// import { formatUserName } from '../../utils/formatUserName'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Toast from '../../components/Toast'
import {
  Navbar,
  Container,
  FormList,
  InputFormList,
  BtnList,
  SpanDetalhes,
  ContainerProducts,
  ContainerTotal,
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
  DropdownToggle
} from './styles'
import { NavbarBrand } from 'reactstrap'
import apiService from '../../services/apiService'
// import Product from '../../components/product'
import { useRouter } from 'next/router'
// import { nextPagePagination } from '../../utils/nexPagePagination'
interface Product {
  id: string
  name: string
  sku: string
  price_suggest: string
  inputName: string
}

interface ProductItemSale {
  product_pdv_id: string
  product_quantity: number
}
interface newSaleProps {
  owner_id: string
  descount: number
  type_of_payment: string
  itemsSalesPDV: ProductItemSale[]
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
    const res = response.data.map(p => ({
      ...p,
      inputName: `${p.id}+${p.name}`
    }))
    const productsList = res
    // const userName = formatUserName(cookie)
    return { props: { productsList } }
  }
  const response = await apiService.get<Product[]>(
    `/products?pages=${0}`
    // {
    //   // headers: { cookie: cookie || '' }
    // }
  )
  const res = response.data.map(p => ({
    ...p,
    inputName: `${p.id}+${p.name}`
  }))
  const productsList = res
  // const userName = formatUserName(cookie)
  return { props: { productsList } }
}

const ListProducts = ({
  productsList
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter()

  const inputRefs = useRef([])

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [products, setProducts] = useState(productsList)

  const [termOfFind, setTermOfFind] = useState('')

  const [showToast, setShowToast] = useState(false)

  const [option, setOption] = useState('')
  const [newSale, setNewSale] = useState<newSaleProps>({
    // owner_id: '9addaa98-ef00-4a21-b781-861b6e8fbc92', id de desenvolvimento
    owner_id: '2c7c5e72-41ef-4233-a096-67e1ded3703b', // id de produção
    descount: 10,
    type_of_payment: option,
    itemsSalesPDV: []
  })

  // let option = ''
  useEffect(() => {}, [newSale])

  let currentPage = router.query.pages ? Number(router.query.pages) : 1

  // const typePaymentHandler = (value: number) => {
  //   if (value === 1) {
  //     option = 'dinheiro'
  //   } else if (value === 2) {
  //     option = 'debito'
  //   } else {
  //     option = 'credito'
  //   }
  //   return value
  // }
  function toggleToast() {
    setShowToast(!showToast)
  }
  // function searchProducHandler(e) {}

  const nextProducts = useCallback(async () => {
    // verify if current page is 0 or NaN
    if (currentPage <= 0 || !isNaN(currentPage)) {
      const response = await apiService.get(`/products?pages=${1}`)
      currentPage++
      const res = response.data.map((p: Product) => ({
        ...p,
        inputName: `${p.id}+${p.name}`
      }))
      setProducts(res)
    }

    // verify if current page is equal 1
    if (currentPage === 1) {
      const response = await apiService.get(
        `/products?pages=${currentPage + 1}`
      )
      currentPage++
      const res = response.data.map((p: Product) => ({
        ...p,
        inputName: `${p.id}+${p.name}`
      }))
      setProducts(res)
    } else {
      // then current page is biggest than one
      const response = await apiService.get(
        `/products?pages=${currentPage + 1}`
      )
      currentPage++
      const res = response.data.map((p: Product) => ({
        ...p,
        inputName: `${p.id}+${p.name}`
      }))
      setProducts(res)
    }
    // nextPagePagination(currentPage, apiService, setProducts)
  }, [currentPage])

  const previusPage = useCallback(async () => {
    // verify if current page is one or NaN
    if (currentPage === 1 || isNaN(currentPage)) {
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
    const res = response.data.map((p: Product) => ({
      ...p,
      inputName: `${p.id}+${p.name}`
    }))
    setProducts(res)
    if (termOfFind.length === 0) {
      setProducts(cacheProducts)
    }
  }, [])

  const valueQuantityHandler = (ev: string) => {}

  const addItemToBasketHandler = useCallback(
    (product: Product) => {
      const inputvalue = inputRefs.current.find(
        i => i.name === `${product.id}+${product.name}`
      )
      const productQuantity = Number(inputvalue.value)

      if (inputvalue.value <= 0 || isNaN(productQuantity)) return

      const itemSale = {
        product_pdv_id: product.id,
        product_quantity: productQuantity
      }
      const hasItemInBasket = newSale.itemsSalesPDV.find(
        item => item.product_pdv_id === itemSale.product_pdv_id
      )

      if (!hasItemInBasket) {
        setNewSale({
          ...newSale,
          itemsSalesPDV: [...newSale.itemsSalesPDV, itemSale]
        })
        newSale.itemsSalesPDV.push(itemSale)
      } else {
        setNewSale({
          ...newSale,
          itemsSalesPDV: newSale.itemsSalesPDV.map(p =>
            p.product_pdv_id === itemSale.product_pdv_id
              ? {
                  product_pdv_id: p.product_pdv_id,
                  product_quantity:
                    p.product_quantity + itemSale.product_quantity
                }
              : p
          )
        })
      }
      toggleToast()
    },
    [newSale]
  )

  const sendSaleHandler = useCallback(async () => {
    // const data = { ...newSale, type_of_payment: option }
    const data = { ...newSale, type_of_payment: option }
    console.log(data)
    const response = await apiService.post('/salesPDV', data)
    if (response.data) {
      console.log('salvo')
    } else {
      console.log('error')
    }
    // todo logic to redirect after save sales
    // console.log(data)
  }, [option, newSale])

  return (
    <div style={{ position: 'relative' }}>
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
              {showToast && (
                <Toast
                  headerMessage="Pronto!"
                  bodyMessage="Produto adicionado a cesta "
                  isOpen={showToast}
                />
              )}
              <TBody>
                {products.map((p: Product) => (
                  <TrBody key={p.id}>
                    <BoxCustomName>
                      <Td>{p.name}</Td>
                    </BoxCustomName>

                    <BoxBodyNumbers>
                      <Td>{p.price_suggest}</Td>
                    </BoxBodyNumbers>
                    <BoxBodyNumbers>
                      <InputPdv
                        ref={el =>
                          el ? inputRefs.current.push(el) : (el = null)
                        }
                        name={`${p.inputName}`}
                        onChange={e => valueQuantityHandler(e.target.value)}
                      />
                    </BoxBodyNumbers>
                    <BoxBodyNumbers>
                      <Td> {p.price_suggest} </Td>
                    </BoxBodyNumbers>
                    <BoxBodyNumbers>
                      <Td> {p.price_suggest} </Td>
                    </BoxBodyNumbers>
                    <TdCustomImage onClick={() => addItemToBasketHandler(p)}>
                      <img src="/image/adicionar.svg" alt="" />
                    </TdCustomImage>
                    <TdCustomImage>
                      <img src="/image/lixeirapdv.svg" alt="" />
                    </TdCustomImage>
                  </TrBody>
                ))}
                <DivBtnPreviusNext>
                  <BtnPreviosNext
                    onClick={previusPage}
                    disabled={products.length < 10 || currentPage <= 1}
                  >
                    <img src="/image/left.svg" /> anterior
                  </BtnPreviosNext>
                  <BtnPreviosNext
                    onClick={nextProducts}
                    disabled={products.length < 10}
                  >
                    Próximo <img src="/image/right.svg" />
                  </BtnPreviosNext>
                </DivBtnPreviusNext>
              </TBody>
            </TabelaBody>
          </ContainerProducts>

          <ContainerTotal>
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
              <BtnFormaPagamento onClick={() => setOption('dinheiro')}>
                Dinheiro
              </BtnFormaPagamento>
            </ContainerValores>
            <ContainerValores>
              <BtnFormaPagamento onClick={() => setOption('debito')}>
                Débito
              </BtnFormaPagamento>
            </ContainerValores>
            <ContainerValores>
              <BtnFormaPagamento onClick={() => setOption('credito')}>
                Crédito
              </BtnFormaPagamento>
            </ContainerValores>

            <ContainerValores>
              <BtnFinalizar onClick={sendSaleHandler}>Finalizar</BtnFinalizar>
            </ContainerValores>
          </ContainerTotal>
        </ContainerVenda>
      </Container>
    </div>
  )
}

export default ListProducts
