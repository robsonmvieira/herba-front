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
  ContainerIconsDeCima,
  BtnAdicionar,
  ContainerAdicionarDesktop,
  ContainerListAdicionarDesktop,
  LabelParaDesktop,
  InputDesktop
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

              {/* Aqui é desktop  */}
              {/* <ContainerListAdicionarDesktop>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '30%',
                    backgroundColor: 'red',
                    marginTop: '20px'
                  }}
                >
                  <ContainerAdicionarDesktop>oi </ContainerAdicionarDesktop>
                  <ContainerAdicionarDesktop>oi</ContainerAdicionarDesktop>
                  <ContainerAdicionarDesktop>oi</ContainerAdicionarDesktop>
                </div>
              </ContainerListAdicionarDesktop> */}

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop style={{ width: '40%' }}>
                  <LabelParaDesktop>Titulo:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop style={{ width: '40%' }}>
                  <LabelParaDesktop>Data de Nascimento:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Sexo:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Telefone:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Cpf:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop style={{ width: '40%' }}>
                  <LabelParaDesktop>Email:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop style={{ width: '40%' }}>
                  <LabelParaDesktop>Profissão:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop style={{ width: '100%' }}>
                  <LabelParaDesktop>Endereço:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Bairro:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Cidade:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Estado:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Peso:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Altura:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
                <ContainerAdicionarDesktop>
                  <LabelParaDesktop>Alergias:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerAdicionarDesktop
                  style={{ flexDirection: 'row', width: '100%' }}
                >
                  <InputDesktop
                    type="checkbox"
                    style={{ width: '30%', backgroundColor: 'green' }}
                  />
                  <LabelParaDesktop style={{ width: '40%' }}>
                    Alergia:
                  </LabelParaDesktop>
                </ContainerAdicionarDesktop>
              </ContainerListAdicionarDesktop>

              {/* Aqui é mobile  */}
              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Nome:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Data Nascimento:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Sexo:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Telefone:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Cpf:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Email:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Profissão:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Enderço:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Bairro:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Cidade:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Estado:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Peso:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Altura:</LabelInput>
                  <Input />
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Alergias:</LabelInput>
                  <Input />
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

              <ContainerListAdicionar>
                <Containeradicionar>
                  <BtnAdicionar>Adicionar</BtnAdicionar>
                </Containeradicionar>
              </ContainerListAdicionar>
            </ContainerNovoCliente>
          </ContainerIconsLg>
          {/* a partir daqui é para tela desktop */}
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default dashClientesNew
