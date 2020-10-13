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
  Tr,
  TrBody,
  ContainerTags,
  Th,
  Td,
  ContainerSide,
  ContainerConteudo,
  ContainerListAdicionar,
  Containeradicionar,
  ContainerSpan,
  ContainerTh,
  Whapper,
  TabelaBody,
  TBody,
  BoxTd,
  BoxTdCustomName,
  WhapperCustomName,
  DivBtnPreviusNext,
  BtnPreviosNext,
  ContainerBusca,
  FormList,
  InputFormList,
  BtnList
  
  
  
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
          <ContainerBusca>
              <FormList>
                <InputFormList
                  
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
                <Td>
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

                <DivBtnPreviusNext >
                  <BtnPreviosNext ><img src="/image/left.svg" /> anterior</BtnPreviosNext>
                  <BtnPreviosNext > Próximo <img src="/image/right.svg" /></BtnPreviosNext>
                </DivBtnPreviusNext>

           </TBody>
           </TabelaBody>
           
          </ContainerListaLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashProdutos
export const getServerSideProps: GetServerSideProps = async params => {
  const cookie = params.req.headers.cookie
  const { pages } = params.query
  if (Number(pages) <= 0) {
    const response = await api.get<IProduct[]>(`products/?pages=${pages}`, {
      headers: { cookie: cookie || '' }
    })
    const products = response.data
    return {
      props: { products }
    }
  }
  const response = await api.get<IProduct[]>(`/products?pages=${pages}`, {
    headers: { cookie: cookie || '' }
  })
  const products = response.data
  return {
    props: { products }
  }
  
}
