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
  Containeradicionar,
  ContainerSpan
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
                <ContainerSpan>
                  <LabelClienteDashboard>45</LabelClienteDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Clientes cadastrados
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboard>Allison Cruz</LabelClienteDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Melhor Cliente
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboardMenos>7</LabelClienteDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Clientes Ociosos
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboardMenos>5</LabelClienteDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Clientes Inativos
                  </LabelDescricaoDashboard>
                </ContainerSpan>
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
              <ContainerSpan>
                <SpanListTh>Nome</SpanListTh>
              </ContainerSpan>
              <ContainerSpan>
                <SpanListTh>Telefone</SpanListTh>
              </ContainerSpan>
              <ContainerSpan>
                <SpanListTh>Compra</SpanListTh>
              </ContainerSpan>
              <ContainerSpan>
                <SpanListTh>Edit</SpanListTh>
              </ContainerSpan>
              <ContainerSpan>
                <SpanListTh>Del</SpanListTh>
              </ContainerSpan>
            </TableHead>
            <TableRow>
              <SpanListTd>Anderson Cooper</SpanListTd>
              <SpanListTd>21964555580</SpanListTd>
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
              <SpanListTd>21964555580</SpanListTd>
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
              <SpanListTd>21964555580</SpanListTd>
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
              <SpanListTd>21964555580</SpanListTd>
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
