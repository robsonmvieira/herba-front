import React from 'react'
import {
  IconsTags,
  ContainerIconsLg,
  LabelProdutoDashboard,
  LabelDescricaoDashboard,
  LabelProdutoDashboardMenos,
  Container,
  ContainerListaLg,
  ContainerTags,
  ContainerSide,
  ContainerConteudo,
  ContainerListAdicionar,
  Containeradicionar,
  Input
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
            <Input></Input>
            <Input></Input>
            <ContainerListAdicionar>
              <Containeradicionar>
                <img src="\image\mais.svg" alt="" />
              </Containeradicionar>
            </ContainerListAdicionar>
          </ContainerListaLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashProducts
