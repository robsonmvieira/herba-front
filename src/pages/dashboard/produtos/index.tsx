import React from 'react'
import { GetServerSideProps } from 'next'

import {
  IconsTags,
  ContainerIconsLg,
  LabelProdutoDashboard,
  LabelDescricaoDashboard,
  LabelProdutoDashboardMenos,
  Container,
  ContainerListaLg,
  TableHead,
  TableRow,
  ContainerTags,
  SpanListTh,
  SpanListTd,
  ContainerSide,
  ContainerConteudo,
  ContainerListAdicionar,
  Containeradicionar,
  ContainerSpan
} from './styles'

import Sidebar from '../../../components/sidebar'
import Menu from '../../../components/Menu'
import api from '../../../services/apiService'

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

const dashProdutos = ({ products }) => {
  // const [listProducts, setlistProducts] = useState<IProduct[]>(products)
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
            <ContainerListAdicionar>
              <Containeradicionar>
                <img src="\image\mais.svg" alt="icone " />
              </Containeradicionar>
            </ContainerListAdicionar>

            <TableHead>
              <SpanListTh>Nome</SpanListTh>
              <SpanListTh>Preço</SpanListTh>
              <SpanListTh>Estoque</SpanListTh>
              <SpanListTh>Edit</SpanListTh>
              <SpanListTh>Del</SpanListTh>
            </TableHead>
            {/* {listProducts.map(p => (
              <TableRow key={p.id}>
                <SpanListTd>{p.name}</SpanListTd>
                <SpanListTd>{p.price_suggest}</SpanListTd>
                <SpanListTd>{p.quantity}</SpanListTd>

                <SpanListTd>
                  <img src="/image/edit.svg" alt="" />
                </SpanListTd>
                <SpanListTd>
                  <img src="/image/lixeira.svg" alt="" />
                </SpanListTd>
              </TableRow>
            ))} */}
            <TableRow>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
            <TableRow>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
            <TableRow>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
            <TableRow>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
          </ContainerListaLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashProdutos
export const getServerSideProps: GetServerSideProps = async params => {
  const { pages } = params.query
  if (Number(pages) <= 0) {
    const response = await api.get<IProduct[]>(`products/?pages=${0}`)
    const products = response.data
    return {
      props: { products }
    }
  }
  const response = await api.get<IProduct[]>(`products/?pages=${pages}`)
  const products = response.data
  return {
    props: { products }
  }
}
