import React from 'react'
import {
  Box,
  FormContainer,
  BoxDescription,
  BoxInformations,
  BoxDescriptionCustom,
  Container,
  ContainerNovoProduto,
  Boxes,
  ContainerSide,
  Content,
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
  ContainerBoxes,
  BtnAdicionar,
  ContentBox
} from './styles'

import Sidebar from '../../../../components/sidebar'
import Menu from '../../../../components/Menu'

const dashProdutosNovo = () => {
  return (
    <>
      <Menu></Menu>

      <Container>
        <ContainerSide>
          <Sidebar />
        </ContainerSide>
        <Content>
          <ContainerBoxes>
            <Boxes>
              <Box>
                <ContentBox>
                  <BoxDescription>35</BoxDescription>
                </ContentBox>
                <ContentBox>
                  <BoxInformations>
                    Produto cadastrados
                  </BoxInformations>
                </ContentBox>
              </Box>
              <Box>
                <ContentBox>
                  <BoxDescription>shake de banana</BoxDescription>
                </ContentBox>
                <ContentBox>
                  <BoxInformations>
                    Mais vendido
                  </BoxInformations>
                </ContentBox>
              </Box>
              <Box>
                <ContentBox>
                  <BoxDescriptionCustom>5</BoxDescriptionCustom>
                </ContentBox>
                <ContentBox>
                  <BoxInformations>
                    Produtos zerados
                  </BoxInformations>
                </ContentBox>
              </Box>
              <Box>
                <ContentBox>
                  <BoxDescriptionCustom>
                    Suco de coca
                  </BoxDescriptionCustom>
                </ContentBox>
                <ContentBox>
                  <BoxInformations>
                    Menos vendido
                  </BoxInformations>
                </ContentBox>
              </Box>
            </Boxes>
          </ContainerBoxes>

          <FormContainer>
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

              {/* versão desktop abaixo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <ContainerListAdicionarSemDivisao>
                <ContainerAdicionarSemDivisao>
                  <ContentBox style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Sku:</LabelInputComDivisao>
                  </ContentBox>

                  <ContentBox>
                    <InputComDivisao></InputComDivisao>
                  </ContentBox>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <ContentBox style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Custo Pv:</LabelInputComDivisao>
                  </ContentBox>

                  <ContentBox>
                    <InputComDivisao></InputComDivisao>
                  </ContentBox>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <ContentBox style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Pontos de Vol.:</LabelInputComDivisao>
                  </ContentBox>

                  <ContentBox>
                    <InputComDivisao></InputComDivisao>
                  </ContentBox>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <ContentBox style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Preço Sugerido:</LabelInputComDivisao>
                  </ContentBox>

                  <ContentBox>
                    <InputComDivisao></InputComDivisao>
                  </ContentBox>
                </ContainerAdicionarSemDivisao>
              </ContainerListAdicionarSemDivisao>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <BtnAdicionar>Adicionar</BtnAdicionar>
                </Containeradicionar>
              </ContainerListAdicionar>
            </ContainerNovoProduto>
          </FormContainer>
        </Content>
      </Container>
    </>
  )
}
export default dashProdutosNovo
