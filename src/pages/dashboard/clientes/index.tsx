import React, { useState } from 'react'
import {
  BoxDescription,
  ContainerBoxes,
  Title,
  Description,
  TitleCustom,
  Container,
  FormContainer,
  Tr,
  TabelaBody,
  Box,
  ContainerSide,
  Content,
  ContainerListAdicionar,
  ContainerAdicionar,
  Whapper,
  WhapperCustomName,
  BoxTitle,
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
        <Content>
          <ContainerBoxes>
            <Box>
              <BoxDescription>
                <BoxTitle>
                  <Title>
                    {clients.length}
                  </Title>
                </BoxTitle>
                <BoxTitle>
                  <Description>
                    Clientes cadastrados
                  </Description>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <Title>Allison Cruz</Title>
                </BoxTitle>
                <BoxTitle>
                  <Description>
                    Melhor Cliente
                  </Description>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <TitleCustom>7</TitleCustom>
                </BoxTitle>
                <BoxTitle>
                  <Description>
                    Clientes Ociosos
                  </Description>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <TitleCustom>5</TitleCustom>
                </BoxTitle>
                <BoxTitle>
                  <Description>
                    Clientes Inativos
                  </Description>
                </BoxTitle>
              </BoxDescription>
            </Box>
          </ContainerBoxes>

          <FormContainer>
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
          </FormContainer>
        </Content>
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
