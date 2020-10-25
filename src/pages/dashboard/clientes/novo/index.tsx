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
  ContainerTituloNovoCliente,
  Titulo,
  ContainerIconsDeCima,
  LabelInput,
  Input,
  ContentCheckBox,
  CheckBox,
  LabelCheckBox,
  ContainerCheckBox,
  BtnAdicionar,
  ContainerSpan,
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

            <BoxFormulario>
              <BoxFormulario>
                <Wrapper >
                  <LabelInput>Nome:</LabelInput>
                  <Input />
                </Wrapper>
                <Wrapper >
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
                <Wrapper >
                  <LabelInput>Email:</LabelInput>
                  <Input />
                </Wrapper>
                <Wrapper >
                  <LabelInput>Profissão:</LabelInput>
                  <Input />
                </Wrapper>
              </BoxFormulario>
            </BoxFormulario>

            <BoxFormulario>
              <BoxFormulario>
                <WrapperCustom >
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
                <WrapperCustom >
                  <LabelInput>Outros:</LabelInput>
                  <Input />
                </WrapperCustom>
              </BoxFormulario>
            

            <BoxPremium>
              <ContentCheckBoxSpecial>
                    <CheckBoxCustomPremium type="checkbox" />
                    <LabelCheckBoxPremium>Cliente Premium</LabelCheckBoxPremium>
                    <img src="/image/premium.svg" alt=""/>
              </ContentCheckBoxSpecial>
            </BoxPremium>

              <BoxFormulario>
                <BoxBtnAdicionar >
                  <BtnAdicionar> Adicionar </BtnAdicionar>
                </BoxBtnAdicionar>
              </BoxFormulario>

     </ContainerNovoCliente>
   </ContainerIconsLg>
 </ContainerConteudo>
</Container>
    </>
  )
}
export default NovoCliente
