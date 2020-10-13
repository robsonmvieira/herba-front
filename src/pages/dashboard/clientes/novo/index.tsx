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
  InputDesktop,
  DivCheckBox,
  CheckBoxDesktop,
  LabelParaCheckBox,
  ContainerCheckBoxDesktop,
  BtnAdicionarDesktop,
  ContainerSpan,
  ContainerAdicionarDesktopCustom,
  BoxAdicionarDesktopCustom,
  DivCheckBoxCustomPremium,
  CheckBoxDesktopCustomPremium,
  LabelParaCheckBoxCustomPremium,
  ContainerListAdicionarCustomMobile,
  InputComDivisaoCustomMobile
} from './styles'

import Sidebar from '../../../../components/sidebar'
import Menu from '../../../../components/Menu'

const dashClientesNovo = () => {
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
                  <LabelClienteDashboard>35</LabelClienteDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Clientes cadastrados
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboard>Robson Shubba</LabelClienteDashboard>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Melhor Cliente
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboardMenos>5</LabelClienteDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Cliente Ocioso
                  </LabelDescricaoDashboard>
                </ContainerSpan>
              </IconsTags>
              <IconsTags>
                <ContainerSpan>
                  <LabelClienteDashboardMenos>10</LabelClienteDashboardMenos>
                </ContainerSpan>
                <ContainerSpan>
                  <LabelDescricaoDashboard>
                    Clientes Inativos
                  </LabelDescricaoDashboard>
                </ContainerSpan>
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
                <ContainerAdicionarDesktopCustom >
                  <LabelParaDesktop>Titulo:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
                <ContainerAdicionarDesktopCustom >
                  <LabelParaDesktop>Data de Nascimento:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
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
                <ContainerAdicionarDesktopCustom>
                  <LabelParaDesktop>Email:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
                <ContainerAdicionarDesktopCustom>
                  <LabelParaDesktop>Profissão:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
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

              {/* todos os check box da versão desktop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <ContainerListAdicionarDesktop>
                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />

                    <LabelParaCheckBox>Triglicerideos</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Pressao baixa</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Insonia</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>
                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Gastrite</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Alergia</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Artrose</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Rinite</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Diabetes</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Anemia</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Sonolencia</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Depressao</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Osteoporose</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Colesterol</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Dor de Cabeça</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Asma</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Cardiopatias</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Dor nas pernas</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Hipertensao</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Indispoisção</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>

                <ContainerCheckBoxDesktop>
                  <DivCheckBox>
                    <CheckBoxDesktop type="checkbox" />
                    <LabelParaCheckBox>Intestino preso</LabelParaCheckBox>
                  </DivCheckBox>
                </ContainerCheckBoxDesktop>
              </ContainerListAdicionarDesktop>

              {/* aqui termina os check boxs >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <ContainerListAdicionarDesktop>
                <BoxAdicionarDesktopCustom>
                  <LabelParaDesktop>Outros:</LabelParaDesktop>
                  <InputDesktop />
                </BoxAdicionarDesktopCustom>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
              <DivCheckBoxCustomPremium>
                    <CheckBoxDesktopCustomPremium type="checkbox" />
                    <LabelParaCheckBoxCustomPremium>Cliente Premium</LabelParaCheckBoxCustomPremium>
                    <img src="/image/premium.svg" alt=""/>
                  </DivCheckBoxCustomPremium>
              </ContainerListAdicionarDesktop>

              <ContainerListAdicionarDesktop>
                <BoxAdicionarDesktopCustom >
                  <BtnAdicionarDesktop> Adicionar </BtnAdicionarDesktop>
                </BoxAdicionarDesktopCustom>
              </ContainerListAdicionarDesktop>

              {/* Aqui é mobile  */}
              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Nome:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Data Nascimento:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Sexo:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Telefone:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Cpf:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Email:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Profissão:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Enderço:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Bairro:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Cidade:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Estado:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Peso:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Altura:</LabelInput>
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionar>
                <Containeradicionar>
                  <LabelInput>Alergias:</LabelInput>
                  <Input/>
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
                  <Input/>
                </Containeradicionar>
              </ContainerListAdicionar>

              <ContainerListAdicionarCustomMobile>
                  <InputComDivisaoCustomMobile type="checkbox"></InputComDivisaoCustomMobile>
                  <LabelInputComDivisao>Cliente Premium:</LabelInputComDivisao>
                  <img src="/image/premium.svg" alt=""/>
                  </ContainerListAdicionarCustomMobile>

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
export default dashClientesNovo
