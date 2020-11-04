import React, { useCallback } from 'react'
// import Input from '../../../../components/Input'
import {
  BoxDescription,
  FormContainer,
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
  ContentCheckBox,
  LabelCheckBox,
  ContainerCheckBox,
  BtnAdicionar,
  BoxTitle,
  Wrapper,
  BoxBtnAdicionar,
  LabelCheckBoxPremium,
  BoxFormulario,
  WrapperSpecial,
  WrapperCustom,
  BoxFormularioCustom,
  BoxDivision,
  BoxFormularioSpecial,
  BoxDivisionCustom,
  BoxPremium,
  ContentCheckBoxSpecial,
  Field,
  BoxInformation
} from './styles'
import Sidebar from '../../../../components/sidebar'
import Menu from '../../../../components/Menu'
import {
  birthDateMask,
  CPFMask,
  NewClient,
  phoneNumberMask,
  state
} from './interfaces'
import { Form } from 'formik'
import MaskedInput from 'react-text-mask'

const NovoCliente = () => {
  const handlerFormSubmit = useCallback(
    async (data: NewClient) => {
      console.log(data)
    },
    [state]
  )

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
                  <BoxInfoDescription>Clientes cadastrados</BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <BoxInformation>Robson Shubba</BoxInformation>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>Melhor Cliente</BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <BoxInfoDescriptionCustom>5</BoxInfoDescriptionCustom>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>Cliente Ocioso</BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
              <BoxDescription>
                <BoxTitle>
                  <BoxInfoDescriptionCustom>10</BoxInfoDescriptionCustom>
                </BoxTitle>
                <BoxTitle>
                  <BoxInfoDescription>Clientes Inativos</BoxInfoDescription>
                </BoxTitle>
              </BoxDescription>
            </ContainerBox>
          </ContainerBoxes>

          <FormContainer onSubmit={handlerFormSubmit} initialValues={state}>
            <Form style={{ width: '90%' }}>
              <ContainerNovoCliente>
                <ContainerTituloNovoCliente>
                  <Titulo>Novo Cliente:</Titulo>
                </ContainerTituloNovoCliente>

                <BoxFormulario>
                  <BoxFormulario>
                    <Wrapper>
                      <LabelInput>Nome:</LabelInput>
                      <Field name="name" />
                    </Wrapper>
                    <Wrapper>
                      <LabelInput>Data de Nascimento:</LabelInput>
                      <Field
                        name="birthdate"
                        render={({ field }) => (
                          <MaskedInput
                            {...field}
                            mask={birthDateMask}
                            placeholder="Data de Nascimento do cliente"
                            type="text"
                          />
                        )}
                      />
                    </Wrapper>
                  </BoxFormulario>
                </BoxFormulario>

                <BoxFormulario>
                  <WrapperSpecial>
                    <LabelInput>Sexo:</LabelInput>
                    <Field name="sexy" />
                  </WrapperSpecial>
                  <WrapperSpecial>
                    <LabelInput>Telefone:</LabelInput>
                    <Field
                      name="phone"
                      render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          placeholder="Telefone do cliente"
                          type="text"
                        />
                      )}
                    />
                  </WrapperSpecial>
                  <WrapperSpecial>
                    <LabelInput>CPF:</LabelInput>
                    <Field
                      name="CPF"
                      render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={CPFMask}
                          placeholder="CPF do cliente"
                          type="text"
                        />
                      )}
                    />
                  </WrapperSpecial>
                </BoxFormulario>

                <BoxFormulario>
                  <BoxFormulario>
                    <Wrapper>
                      <LabelInput>Email:</LabelInput>
                      <Field name="email" />
                    </Wrapper>
                    <Wrapper>
                      <LabelInput>Profissão:</LabelInput>
                      <Field name="profission" />
                    </Wrapper>
                  </BoxFormulario>
                </BoxFormulario>

                <BoxFormulario>
                  <BoxFormulario>
                    <Wrapper>
                      <LabelInput>CEP:</LabelInput>
                      <Field name="zip_code" />
                    </Wrapper>
                    <Wrapper>
                      <LabelInput>Endereço:</LabelInput>
                      <Field name="address" />
                    </Wrapper>
                  </BoxFormulario>
                </BoxFormulario>

                <BoxFormulario>
                  <WrapperSpecial>
                    <LabelInput>Bairro:</LabelInput>
                    <Field name="neighborhood" />
                  </WrapperSpecial>
                  <WrapperSpecial>
                    <LabelInput>Cidade:</LabelInput>
                    <Field name="city" />
                  </WrapperSpecial>
                  <WrapperSpecial>
                    <LabelInput>Estado:</LabelInput>
                    <Field name="state" />
                  </WrapperSpecial>
                </BoxFormulario>

                <BoxFormulario>
                  <WrapperSpecial>
                    <LabelInput>Peso:</LabelInput>
                    <Field name="weigth" />
                  </WrapperSpecial>
                  <WrapperSpecial>
                    <LabelInput>Altura:</LabelInput>
                    <Field name="heigth" />
                  </WrapperSpecial>
                  <WrapperSpecial>
                    <LabelInput>Alergias:</LabelInput>
                    <Field name="alergy" />
                  </WrapperSpecial>
                </BoxFormulario>

                <BoxDivision>
                  <BoxFormularioCustom>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="triglicerideos" type="checkbox" />
                        <LabelCheckBox>Triglicerideos</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="pressao_baixa" type="checkbox" />
                        <LabelCheckBox>Pressao baixa</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="insonia" type="checkbox" />
                        <LabelCheckBox>Insonia</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="gastrite" type="checkbox" />
                        <LabelCheckBox>Gastrite</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                  </BoxFormularioCustom>

                  <BoxFormularioCustom>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="alergia" type="checkbox" />
                        <LabelCheckBox>Alergia</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="artrose" type="checkbox" />
                        <LabelCheckBox>Artrose</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="rinite" type="checkbox" />
                        <LabelCheckBox>Rinite</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="diabetes" type="checkbox" />
                        <LabelCheckBox>Diabetes</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                  </BoxFormularioCustom>
                </BoxDivision>
                <BoxDivision>
                  <BoxFormularioCustom>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="anemia" type="checkbox" />
                        <LabelCheckBox>Anemia</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="sonolencia" type="checkbox" />
                        <LabelCheckBox>Sonolencia</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="depressao" type="checkbox" />
                        <LabelCheckBox>Depressao</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="osteoporose" type="checkbox" />
                        <LabelCheckBox>Osteoporose</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                  </BoxFormularioCustom>

                  <BoxFormularioCustom>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="colesterol" type="checkbox" />
                        <LabelCheckBox>Colesterol</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="dor_de_cabeca" type="checkbox" />
                        <LabelCheckBox>Dor de Cabeça</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="asma" type="checkbox" />
                        <LabelCheckBox>Asma</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="cardiopatas" type="checkbox" />
                        <LabelCheckBox>Cardiopatias</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                  </BoxFormularioCustom>
                </BoxDivision>
                <BoxDivisionCustom>
                  <BoxFormularioSpecial>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="dor_nas_pernas" type="checkbox" />
                        <LabelCheckBox>Dor nas pernas</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="hipertensao" type="checkbox" />
                        <LabelCheckBox>Hipertensao</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                  </BoxFormularioSpecial>

                  <BoxFormularioSpecial>
                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="indisposicao" type="checkbox" />
                        <LabelCheckBox>Indispoisção</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                      <ContentCheckBox>
                        <Field name="intestino_preso" type="checkbox" />
                        <LabelCheckBox>Intestino preso</LabelCheckBox>
                      </ContentCheckBox>
                    </ContainerCheckBox>
                  </BoxFormularioSpecial>
                </BoxDivisionCustom>
                <BoxFormulario>
                  <WrapperCustom>
                    <LabelInput>Outros:</LabelInput>
                    <Field name="other" />
                  </WrapperCustom>
                </BoxFormulario>

                <BoxPremium>
                  <ContentCheckBoxSpecial>
                    <Field name="premium" type="checkbox" />
                    <LabelCheckBoxPremium>Cliente Premium</LabelCheckBoxPremium>
                    <img src="/image/premium.svg" alt="" />
                  </ContentCheckBoxSpecial>
                </BoxPremium>

                <BoxFormulario>
                  <BoxBtnAdicionar>
                    <BtnAdicionar type="submit"> Adicionar </BtnAdicionar>
                  </BoxBtnAdicionar>
                </BoxFormulario>
              </ContainerNovoCliente>
            </Form>
          </FormContainer>
        </Content>
      </Container>
    </>
  )
}
export default NovoCliente
