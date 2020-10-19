import React, { useCallback, useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

import { GetServerSideProps } from 'next'
import {
  IconsTags,
  ContainerIconsLg,
  LabelProdutoDashboard,
  LabelDescricaoDashboard,
  LabelProdutoDashboardMenos,
  Container,
  ContainerListaLg,
  Tr,
  TrBody,
  ContainerTags,
  Th,
  Td,
  ContainerSide,
  ContainerConteudo,
  ContainerSpan,
  ContainerTh,
  Whapper,
  TabelaBody,
  TBody,
  BoxTd,
  BoxTdCustomName,
  WhapperCustomName,
  ContainerBtnPagination,
  BtnPreviosNext,
  ContainerBusca,
  FormList,
  InputFormList,
  BtnList
} from './styles'

import Sidebar from '../../../components/sidebar'
import Menu from '../../../components/Menu'
import apiService from '../../../services/apiService'
import { useRouter } from 'next/router'

interface IProduct {
  id: string
  sku: string
  name: string
  owner_id: string
  quantity: number
  volume_points: string
  price_suggest: string
  from_zero_to_four_hundred_ninety_nine: string
  from_five_hundred_to_nine_hundred_ninety_nine: string
  from_one_thousand_to_three_thousand_nine_hundred_ninety_nine: string
  more_than_four_thousand: string
  cost_per_pv: string
  category_id: string
}

const dashProdutos = ({ productsList }) => {
  // const [listProducts, setlistProducts] = useState<IProduct[]>(products)
  const [modal, setModal] = useState(false)
  const [produtcEdit, setProdutcEdit] = useState<IProduct>({} as IProduct)

  useEffect(() => {}, [produtcEdit])

  const router = useRouter()

  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => setIsOpen(!isOpen)

  const [products, setProducts] = useState(productsList)

  const [termOfFind, setTermOfFind] = useState('')

  const [showToast, setShowToast] = useState(false)

  const option = ''

  let currentPage = router.query.pages ? Number(router.query.pages) : 1

  function editProductHandler(product: IProduct) {
    toggle()
    setProdutcEdit(product)
  }

  function valueQuantityUnitHandler(e) {
    produtcEdit.quantity = e
    setProdutcEdit({ ...produtcEdit, quantity: e })
  }

  const updateProductHandler = async () => {
    const response = await apiService.put(
      `/products/${produtcEdit.id}`,
      produtcEdit
    )
    toggle()
  }

  //
  const nextProducts = useCallback(async () => {
    // verify if current page is 0 or NaN
    if (currentPage <= 0 || isNaN(currentPage)) {
      const response = await apiService.get(`/products?pages=${1}`)
      // currentPage++

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
      console.log(currentPage)
      setProducts(response.data)
    }
    // nextPagePagination(currentPage, apiService, setProducts)
  }, [currentPage])

  const previusPage = useCallback(async () => {
    // verify if current page is one or NaN
    console.log('130')
    if (currentPage === 1 || isNaN(currentPage)) {
      const response = await apiService.get(`/products?pages=${1}`)
      // currentPage++
      console.log(currentPage)
      setProducts(response.data)
    } else {
      // then current page is bigger than one
      const response = await apiService.get(
        `/products?pages=${currentPage - 1}`
      )
      currentPage--
      console.log(currentPage)

      setProducts(response.data)
    }
  }, [currentPage])

  const searchProductHandler = useCallback(async termOfFind => {
    const cacheProducts = products
    const response = await apiService.get(
      `/associates/productByLike/?terms=${termOfFind}`
    )
    setTermOfFind(termOfFind)
    const res = response.data
    setProducts(res)
    if (termOfFind.length === 0) {
      setProducts(cacheProducts)
    }
  }, [])

  const toggle = () => setModal(!modal)

  return (
    <>
      <Menu />
      <Container>
        <ContainerSide>
          <Sidebar />
        </ContainerSide>
        <ContainerConteudo>
          <ContainerIconsLg>
            <ContainerTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelProdutoDashboard>35</LabelProdutoDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Produto cadastrados
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelProdutoDashboard>Sopa de ninhaça</LabelProdutoDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Mais vendido
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelProdutoDashboardMenos>5</LabelProdutoDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Produtos zerados
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelProdutoDashboardMenos>
                    Suco de coca
                  </LabelProdutoDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Menos vendido
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
            </ContainerTags>
          </ContainerIconsLg>

          <ContainerListaLg>
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
                <WhapperCustomName>
                  <Th>Nome</Th>
                </WhapperCustomName>
                <Whapper>
                  <Th>Preço</Th>
                </Whapper>
                <Whapper>
                  <Th>Estoque</Th>
                </Whapper>
                <Whapper>
                  <Th>Edit</Th>
                </Whapper>
                <Whapper>
                  <Th>Del</Th>
                </Whapper>
              </Tr>
            </ContainerTh>

            <TabelaBody>
              <TBody>
                {products.map(p => (
                  <TrBody key={p.id}>
                    <BoxTdCustomName>
                      <Td>{p.name}</Td>
                    </BoxTdCustomName>
                    <BoxTd>
                      <Td>{p.price_suggest}</Td>
                    </BoxTd>
                    <BoxTd>
                      <Td>{p.quantity}</Td>
                    </BoxTd>
                    <BoxTd>
                      <Td onClick={() => editProductHandler(p)}>
                        <img src="/image/edit.svg" alt="" />
                      </Td>
                    </BoxTd>
                    <BoxTd>
                      <Td>
                        <img src="/image/lixeira.svg" alt="" />
                      </Td>
                    </BoxTd>
                  </TrBody>
                ))}

                <ContainerBtnPagination>
                  <BtnPreviosNext
                    onClick={previusPage}
                    disabled={currentPage === 1}
                  >
                    <img src="/image/left.svg" /> anterior
                  </BtnPreviosNext>
                  <BtnPreviosNext
                    onClick={nextProducts}
                    disabled={products.length < 10}
                  >
                    Próximo <img src="/image/right.svg" />
                  </BtnPreviosNext>
                </ContainerBtnPagination>
              </TBody>
            </TabelaBody>
          </ContainerListaLg>
        </ContainerConteudo>
      </Container>

      {/* modal */}
      <Modal
        style={{ background: '#1d1f2f' }}
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
      >
        <ModalHeader
          toggle={toggle}
          style={{ background: '#1D1F2F', color: '#fff' }}
        >
          Editar Produto
        </ModalHeader>
        <ModalBody style={{ background: '#1D1F2F', color: '#fff' }}>
          <div
            className="container"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label>Nome:</label>
            <input
              type="text"
              disabled
              value={produtcEdit.name}
              style={{
                background: '#282741',
                color: '#fff',
                border: 'none',
                height: '40px',
                paddingLeft: '10px',
                marginBottom: '20px',
                outline: 'none'
              }}
            />
            <label>SKU:</label>
            <input
              type="text"
              disabled
              value={produtcEdit.sku}
              style={{
                background: '#282741',
                color: '#fff',
                border: 'none',
                height: '40px',
                paddingLeft: '10px',
                marginBottom: '20px',
                outline: 'none'
              }}
            />
            <label>Quantidade:</label>
            <input
              onChange={e => valueQuantityUnitHandler(e.target.value)}
              type="text"
              value={produtcEdit.quantity}
              style={{
                background: '#282741',
                color: '#fff',
                border: 'none',
                height: '40px',
                paddingLeft: '10px',
                marginBottom: '20px',
                outline: 'none'
              }}
            />
            <label>Preço:</label>
            <input
              type="text"
              disabled
              value={produtcEdit.price_suggest}
              style={{
                background: '#282741',
                color: '#fff',
                border: 'none',
                height: '40px',
                paddingLeft: '10px',
                marginBottom: '20px',
                outline: 'none'
              }}
            />
          </div>
          <div
            className="buttons"
            style={{ marginTop: '20px', paddingLeft: '20px' }}
          >
            <button
              onClick={updateProductHandler}
              className="save"
              style={{
                background: '#2fc84c',
                border: 'none',
                marginRight: '20px',
                padding: '10px 15px',
                color: '#fff',
                outline: 'none'
              }}
            >
              Atualizar
            </button>
            <button
              onClick={toggle}
              className="cancel"
              style={{
                background: '#ef6e6e',
                border: 'none',
                marginRight: '20px',
                padding: '10px 15px',
                color: '#fff',
                outline: 'none'
              }}
            >
              Cancelar
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}
export default dashProdutos
export const getServerSideProps: GetServerSideProps = async params => {
  const cookie = params.req.headers.cookie
  const { pages } = params.query
  if (Number(pages) <= 0) {
    const response = await apiService.get<IProduct[]>(
      `products/?pages=${pages}`,
      {
        headers: { cookie: cookie || '' }
      }
    )
    const products = response.data
    return {
      props: { productsList: products }
    }
  }
  const response = await apiService.get<IProduct[]>(
    `/products?pages=${pages}`,
    {
      headers: { cookie: cookie || '' }
    }
  )
  const products = response.data

  return {
    props: { productsList: products }
  }
}
