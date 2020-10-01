import React from 'react'
import {
  IconsTags,
  ContainerIconsLg,
  LabelProdutoDashboard,
  LabelDescricaoDashboard,
  LabelProdutoDashboardMenos,
  Container,
  ContainerNovoProduto,
  ContainerTags,
  ContainerSide,
  ContainerConteudo,
  ContainerListAdicionar,
  Containeradicionar,
  Input,
  LabelInput,
  ContainerTituloNovoProduto,
  Titulo,
  ContainerAdicionarComDivisao,
  InputComDivisao,
  LabelInputComDivisao,
  ContainerListAdicionarComDivisao,
  ContainerListAdicionarSemDivisao,
  ContainerAdicionarSemDivisao,
  ContainerIconsDeCima,
  BtnAdicionar
} from './styles'

import Sidebar from '../../../../components/sidebar'
import Menu from '../../../../components/Menu'

const dashProducts = () => {
  return (
    <>
      <Menu></Menu>

      <Container>
        <ContainerSide>
          <Sidebar />
        </ContainerSide>
        <ContainerConteudo>
          <ContainerIconsDeCima>
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
          </ContainerIconsDeCima>

          <ContainerIconsLg>
            <ContainerNovoProduto>
              <ContainerTituloNovoProduto>
                <Titulo>Novo Produto:</Titulo>
              </ContainerTituloNovoProduto>
              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Titulo:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Categoria:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Descrição:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <LabelInputComDivisao>Sku:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <LabelInputComDivisao>Custo Pv:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <LabelInputComDivisao>Pontos de Volume:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <LabelInputComDivisao>Preço Sugerido:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarSemDivisao>
                <ContainerAdicionarSemDivisao>
                  <LabelInputComDivisao>Sku:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <LabelInputComDivisao>Custo Pv:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <LabelInputComDivisao>Pontos de Volume:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <LabelInputComDivisao>Preço Sugerido:</LabelInputComDivisao>
                  <InputComDivisao></InputComDivisao>
                </ContainerAdicionarSemDivisao>
              </ContainerListAdicionarSemDivisao>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <BtnAdicionar>Adicionar</BtnAdicionar>
                </Containeradicionar>
              </ContainerListAdicionar>
            </ContainerNovoProduto>
          </ContainerIconsLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashProducts
