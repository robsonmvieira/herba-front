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
  BtnAdicionar,
  ContainerSpan
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
        <ContainerConteudo>
          <ContainerIconsDeCima>
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
                  <LabelProdutoDashboard>shake de banana</LabelProdutoDashboard>
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

              {/* versão desktop abaixo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <ContainerListAdicionarSemDivisao>
                <ContainerAdicionarSemDivisao>
                  <ContainerSpan style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Sku:</LabelInputComDivisao>
                  </ContainerSpan>

                  <ContainerSpan>
                    <InputComDivisao></InputComDivisao>
                  </ContainerSpan>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <ContainerSpan style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Custo Pv:</LabelInputComDivisao>
                  </ContainerSpan>

                  <ContainerSpan>
                    <InputComDivisao></InputComDivisao>
                  </ContainerSpan>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <ContainerSpan style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Pontos de Vol.:</LabelInputComDivisao>
                  </ContainerSpan>

                  <ContainerSpan>
                    <InputComDivisao></InputComDivisao>
                  </ContainerSpan>
                </ContainerAdicionarSemDivisao>

                <ContainerAdicionarSemDivisao>
                  <ContainerSpan style={{ justifyContent: 'flex-start' }}>
                    <LabelInputComDivisao>Preço Sugerido:</LabelInputComDivisao>
                  </ContainerSpan>

                  <ContainerSpan>
                    <InputComDivisao></InputComDivisao>
                  </ContainerSpan>
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
export default dashProdutosNovo
