import React from 'react'
import {
  IconsTags,
  ContainerIconsLg,
  LabelClienteDashboard,
  LabelDescricaoDashboard,
  LabelClienteDashboardMenos,
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

const dashClientes = () => {
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
                <LabelClienteDashboard>45</LabelClienteDashboard>
                <LabelDescricaoDashboard>
                  Clientes cadastrados
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelClienteDashboard>Allison Cruz</LabelClienteDashboard>
                <LabelDescricaoDashboard>
                  Melhor Cliente
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelClienteDashboardMenos>7</LabelClienteDashboardMenos>
                <LabelDescricaoDashboard>
                  Clientes Ociosos
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelClienteDashboardMenos>5</LabelClienteDashboardMenos>
                <LabelDescricaoDashboard>
                  Clientes Inativos
                </LabelDescricaoDashboard>
              </IconsTags>
            </ContainerTags>
          </ContainerIconsLg>

          <ContainerListaLg>
            <ContainerListAdicionar>
              <Containeradicionar>
                <img src="\image\mais.svg" alt="" />
              </Containeradicionar>
            </ContainerListAdicionar>

            <TableHead>
              <SpanListTh>Nome</SpanListTh>
              <SpanListTh>Telefone</SpanListTh>
              <SpanListTh>Ultima Compra</SpanListTh>
              <SpanListTh>Edit</SpanListTh>
              <SpanListTh>Del</SpanListTh>
            </TableHead>
            <TableRow>
              <SpanListTd>Anderson Cooper</SpanListTd>
              <SpanListTd>21 964555580</SpanListTd>
              <SpanListTd>20/05/2020</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
            <TableRow>
              <SpanListTd>Anderson Cooper</SpanListTd>
              <SpanListTd>21 964555580</SpanListTd>
              <SpanListTd>20/05/2020</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
            <TableRow>
              <SpanListTd>Anderson Cooper</SpanListTd>
              <SpanListTd>21 964555580</SpanListTd>
              <SpanListTd>20/05/2020</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
            </TableRow>
            <TableRow>
              <SpanListTd>Anderson Cooper</SpanListTd>
              <SpanListTd>21 964555580</SpanListTd>
              <SpanListTd>20/05/2020</SpanListTd>
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
export default dashClientes
