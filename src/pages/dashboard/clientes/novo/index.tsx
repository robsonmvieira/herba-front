import React from 'react'
import {
  BoxDescription,
  FormContainer,
  BoxInformation,
  BoxInfoDescription,
  BoxInfoDescriptionCustom,
  Container,
  ContainerNovoCliente,
  ContainerBox,
  ContainerSide,
  Content,
  ContainerTituloNovoCliente,
  Titulo,
  ContainerBoxes,
  LabelInput,
  Input,
  ContentCheckBox,
  CheckBox,
  LabelCheckBox,
  ContainerCheckBox,
  BtnAdicionar,
  BoxTitle,
  Wrapper,
  BoxBtnAdicionar,
  CheckBoxCustomPremium,
  LabelCheckBoxPremium,
  BoxFormulario,
  WrapperSpecial,
  WrapperCustom,
  BoxFormularioCustom,
  BoxDivision,
  BoxFormularioSpecial,
  BoxDivisionCustom,
  BoxPremium,
  ContentCheckBoxSpecial
} from './styles'

import Sidebar from '../../../../components/sidebar'
import Menu from '../../../../components/Menu'

const NovoCliente = () => {
  return (
    <>
      <Menu />

      <Container>
        <ContainerSide>
          <Sidebar />
        </ContainerSide>
        <Content>
          <ContainerBoxes>
            <ContainerBox>
              <BoxDescription>
                <BoxTitle>
                  <BoxInformation>35</BoxInformation>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>
                    Clientes cadastrados
                  </BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <BoxInformation>Robson Shubba</BoxInformation>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>
                    Melhor Cliente
                  </BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <BoxInfoDescriptionCustom>5</BoxInfoDescriptionCustom>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>
                    Cliente Ocioso
                  </BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <BoxInfoDescriptionCustom>10</BoxInfoDescriptionCustom>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>
                    Clientes Inativos
                  </BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
            </ContainerBox>
          </ContainerBoxes>

          <FormContainer>
            <ContainerNovoCliente>
              <ContainerTituloNovoCliente>
                <Titulo>Novo Cliente:</Titulo>
              </ContainerTituloNovoCliente>

              <BoxFormulario>
                <BoxFormulario>
                  <Wrapper>
                    <LabelInput>Nome:</LabelInput>
                    <Input />
                  </Wrapper>
                  <Wrapper>
                    <LabelInput>Email:</LabelInput>
                    <Input />
                  </Wrapper>
                </BoxFormulario>
              </BoxFormulario>

              <BoxFormulario>
                <WrapperSpecial>
                  <LabelInput>Sexo:</LabelInput>
                  <Input />
                </WrapperSpecial>
                <WrapperSpecial>
                  <LabelInput>Telefone:</LabelInput>
                  <Input />
                </WrapperSpecial>
                <WrapperSpecial>
                  <LabelInput>Cpf:</LabelInput>
                  <Input />
                </WrapperSpecial>
              </BoxFormulario>

              <BoxFormulario>
                <BoxFormulario>
                  <Wrapper>
                    <LabelInput>Email:</LabelInput>
                    <Input />
                  </Wrapper>
                  <Wrapper>
                    <LabelInput>Profissão:</LabelInput>
                    <Input />
                  </Wrapper>
                </BoxFormulario>
              </BoxFormulario>

              <BoxFormulario>
                <BoxFormulario>
                  <WrapperCustom>
                    <LabelInput>Endereço:</LabelInput>
                    <Input />
                  </WrapperCustom>
                </BoxFormulario>
              </BoxFormulario>

              <BoxFormulario>
                <WrapperSpecial>
                  <LabelInput>Bairro:</LabelInput>
                  <Input />
                </WrapperSpecial>
                <WrapperSpecial>
                  <LabelInput>Cidade:</LabelInput>
                  <Input />
                </WrapperSpecial>
                <WrapperSpecial>
                  <LabelInput>Estado:</LabelInput>
                  <Input />
                </WrapperSpecial>
              </BoxFormulario>

              <BoxFormulario>
                <WrapperSpecial>
                  <LabelInput>Peso:</LabelInput>
                  <Input />
                </WrapperSpecial>
                <WrapperSpecial>
                  <LabelInput>Altura:</LabelInput>
                  <Input />
                </WrapperSpecial>
                <WrapperSpecial>
                  <LabelInput>Alergias:</LabelInput>
                  <Input />
                </WrapperSpecial>
              </BoxFormulario>

              <BoxDivision>
                <BoxFormularioCustom>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Triglicerideos</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Pressao baixa</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Insonia</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Gastrite</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                </BoxFormularioCustom>

                <BoxFormularioCustom>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Alergia</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Artrose</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Rinite</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Diabetes</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                </BoxFormularioCustom>
              </BoxDivision>
              <BoxDivision>
                <BoxFormularioCustom>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Anemia</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Sonolencia</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Depressao</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Osteoporose</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                </BoxFormularioCustom>

                <BoxFormularioCustom>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Colesterol</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Dor de Cabeça</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Asma</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Cardiopatias</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                </BoxFormularioCustom>
              </BoxDivision>
              <BoxDivisionCustom>
                <BoxFormularioSpecial>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Dor nas pernas</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Hipertensao</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                </BoxFormularioSpecial>

                <BoxFormularioSpecial>
                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Indispoisção</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>

                  <ContainerCheckBox>
                    <ContentCheckBox>
                      <CheckBox type="checkbox" />
                      <LabelCheckBox>Intestino preso</LabelCheckBox>
                    </ContentCheckBox>
                  </ContainerCheckBox>
                </BoxFormularioSpecial>
              </BoxDivisionCustom>
              <BoxFormulario>
                <WrapperCustom>
                  <LabelInput>Outros:</LabelInput>
                  <Input />
                </WrapperCustom>
              </BoxFormulario>

              <BoxPremium>
                <ContentCheckBoxSpecial>
                  <CheckBoxCustomPremium type="checkbox" />
                  <LabelCheckBoxPremium>Cliente Premium</LabelCheckBoxPremium>
                  <img src="/image/premium.svg" alt="" />
                </ContentCheckBoxSpecial>
              </BoxPremium>

              <BoxFormulario>
                <BoxBtnAdicionar>
                  <BtnAdicionar> Adicionar </BtnAdicionar>
                </BoxBtnAdicionar>
              </BoxFormulario>

     </ContainerNovoCliente>
   </FormContainer>
 </Content>
</Container>
    </>
  )
}
export default NovoCliente
