import React, { useState } from 'react'
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
  ContainerAdicionar,
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
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import apiService from '../../../services/apiService'
import { clientProps } from './interfaces'
import Link from 'next/link'

const dashClientes = ({
  clientList
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const [clients, setClients] = useState<clientProps[]>(clientList)
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
                  <LabelClienteDashboard>
                    {clients.length}
                  </LabelClienteDashboard>
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
              <ContainerAdicionar>
                <Link href="/dashboard/clientes/novo">
                  <img
                    src="\image\mais.svg"
                    alt="this is a icon that will go to new client pages"
                  />
                </Link>
              </ContainerAdicionar>
            </ContainerListAdicionar>

            <ContainerBusca>
              <FormList>
                <InputFormList />
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
              {clients.map(c => (
                <TBody key={c.email}>
                  <BoxTdCustomName>
                    <Td>{c.name}</Td>
                  </BoxTdCustomName>
                  <BoxTd>
                    <Td>{c.phone}</Td>
                  </BoxTd>
                  <BoxTd>
                    <Td>
                      {c.last_sale
                        ? c.last_sale
                        : 'ainda não tem compra realizada'}
                    </Td>
                  </BoxTd>
                  <BoxTd>
                    <img src="/image/edit.svg" alt="" />
                  </BoxTd>
                  <BoxTd>
                    <img src="/image/lixeira.svg" alt="" />
                  </BoxTd>
                </TBody>
              ))}
              <TBody></TBody>
            </TabelaBody>
            <DivBtnPreviusNext>
              <BtnPreviosNext>
                <img src="/image/left.svg" /> anterior
              </BtnPreviosNext>
              <BtnPreviosNext>
                {' '}
                Próximo <img src="/image/right.svg" />
              </BtnPreviosNext>
            </DivBtnPreviusNext>
          </ContainerListaLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashClientes

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apiService.get<clientProps[]>('clients')
  return {
    props: { clientList: data }
  }
}
