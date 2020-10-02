import React, { useState } from 'react'
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
  Containeradicionar
} from './styles'

import Sidebar from '../../../components/sidebar'
import Menu from '../../../components/Menu'
import api from '../../../services/api'

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

const dashProducts = ({ products }) => {
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
                <LabelProdutoDashboard>35</LabelProdutoDashboard>
                <LabelDescricaoDashboard>
                  Produto cadastrados
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelProdutoDashboard>Sopa de ninhaça</LabelProdutoDashboard>
                <LabelDescricaoDashboard>Mais vendido</LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelProdutoDashboardMenos>5</LabelProdutoDashboardMenos>
                <LabelDescricaoDashboard>
                  Produtos zerados
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelProdutoDashboardMenos>
                  Suco de coca
                </LabelProdutoDashboardMenos>
                <LabelDescricaoDashboard>Menos vendido</LabelDescricaoDashboard>
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
// export default dashProducts
// export const getServerSideProps: GetServerSideProps = async params => {
//   const { pages } = params.query
//   if (Number(pages) <= 0) {
//     const response = await api.get<IProduct[]>(`products/?pages=${0}`)
//     const products = response.data
//     return {
//       props: { products }
//     }
//   }
//   const response = await api.get<IProduct[]>(`products/?pages=${pages}`)
//   const products = response.data
//   return {
//     props: { products }
//   }
// }
