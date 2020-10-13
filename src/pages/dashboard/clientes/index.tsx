import React from 'react'
import {
  IconsTags,
  ContainerIconsLg,
  LabelClienteDashboard,
  LabelDescricaoDashboard,
  LabelClienteDashboardMenos,
  Container,
  ContainerListaLg,
  Tr,
  TabelaBody,
  ContainerTags,
  ContainerSide,
  ContainerConteudo,
  ContainerListAdicionar,
  Containeradicionar,
  Whapper,
  WhapperCustomName,
  ContainerSpan,
  Th,
  TBody,
  BoxTdCustomName,
  BoxTd,
  Td,
  DivBtnPreviusNext,
  BtnPreviosNext,
  ContainerBusca,
  FormList,
  InputFormList,
  BtnList
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

            <ContainerBusca>
              <FormList>
                <InputFormList/>
                <BtnList>Cancelar</BtnList>
              </FormList>
            </ContainerBusca>


            <Tr>
              <WhapperCustomName>
                <Th>Nome</Th>
              </WhapperCustomName>
              <Whapper>
                <Th>Telefone</Th>
              </Whapper>
              <Whapper>
                <Th>Compra</Th>
              </Whapper>
              <Whapper>
                <Th>Edit</Th>
              </Whapper>
              <Whapper>
                <Th>Del</Th>
              </Whapper>
            </Tr>
          <TabelaBody>
            <TBody>
              <BoxTdCustomName><Td>Anderson Cooper</Td></BoxTdCustomName>
              <BoxTd><Td>21964555580</Td></BoxTd>
              <BoxTd><Td>20/05/2020</Td></BoxTd>
              <BoxTd>
              <img src="/image/edit.svg" alt="" />
              </BoxTd>
              <BoxTd>
              <img src="/image/lixeira.svg" alt="" />
              </BoxTd>   

              </TBody>
          </TabelaBody>
                <DivBtnPreviusNext >
                  <BtnPreviosNext ><img src="/image/left.svg" /> anterior</BtnPreviosNext>
                  <BtnPreviosNext > Próximo <img src="/image/right.svg" /></BtnPreviosNext>
                </DivBtnPreviusNext>
            
          </ContainerListaLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashClientes
