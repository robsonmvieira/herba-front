import React from 'react'
import {
  IconsTags,
  ContainerIconsLg,
  LabelClienteDashboard,
  LabelDescricaoDashboard,
  LabelClienteDashboardMenos,
  Container,
  ContainerNovoCliente,
  ContainerTags,
  ContainerSide,
  ContainerConteudo,
  ContainerListAdicionar,
  Containeradicionar,
  Input,
  LabelInput,
  ContainerTituloNovoCliente,
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

const dashClientesNew = () => {
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
                <LabelClienteDashboard>35</LabelClienteDashboard>
                <LabelDescricaoDashboard>
                  Clientes cadastrados
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelClienteDashboard>Robson Shubba</LabelClienteDashboard>
                <LabelDescricaoDashboard>
                  Melhor Cliente
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelClienteDashboardMenos>5</LabelClienteDashboardMenos>
                <LabelDescricaoDashboard>
                  Cliente Ocioso
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelClienteDashboardMenos>10</LabelClienteDashboardMenos>
                <LabelDescricaoDashboard>
                  Clientes Inativos
                </LabelDescricaoDashboard>
              </IconsTags>
            </ContainerTags>
          </ContainerIconsDeCima>

          <ContainerIconsLg>
            <ContainerNovoCliente>
              <ContainerTituloNovoCliente>
                <Titulo>Novo Cliente:</Titulo>
              </ContainerTituloNovoCliente>
              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Nome:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Data Nascimento:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Sexo:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Telefone:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Cpf:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Email:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Profissão:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Enderço:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Bairro:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Cidade:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Estado:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Peso:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Altura:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Alergias:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Triglecirideos</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Pressao baixa:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Insonia:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Gastrite:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Artrose:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Alergia:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Osteoporose:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Falta de energia:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Diabetes:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>
                    Anemia/ Baixa Imun.:
                  </LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Sonolencia:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Depressao:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Osteoporose:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Intestino preso:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Asma:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Dor nas pernas:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Doença cardiacas:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Colesterol:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Triglecirideos:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Dor nas pernas:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Doença cardiacas:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Pressao baixa:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Dor de Cabeça:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Hipertensao:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionarComDivisao>
                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Rinite:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>

                <ContainerAdicionarComDivisao>
                  <InputComDivisao type="checkbox"></InputComDivisao>
                  <LabelInputComDivisao>Colesterol:</LabelInputComDivisao>
                </ContainerAdicionarComDivisao>
              </ContainerListAdicionarComDivisao>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Outros:</LabelInput>
                  <Input></Input>
                </Containeradicionar>
              </ContainerListAdicionar>

              {/* a partir daqui é a tela grande  */}

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
            </ContainerNovoCliente>
          </ContainerIconsLg>
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashClientesNew
