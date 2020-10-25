import React from 'react'
import {
  Section,
  Container,
  BoxFormulario,
  ContainerConteudo,
  BoxTitulo,
  Titulo,
  ContainerFormulario,
  Label,
  InputDesktop,
  BtnAdicionar,
  Select,
  Wrapper,
  BoxInput,
  BoxInputCustom,
  ContainerSide
  
} from '../../../styles/configuracao'

import Sidebar from '../../components/sidebar'
import Menu from '../../components/Menu'

const configuracao = () => {
  return (
    <>
      <Menu />

      <Container>
      <ContainerSide>
          <Sidebar />
        </ContainerSide>
        <ContainerConteudo>
         

          <Section>
            <BoxFormulario>
              <BoxTitulo>
                <Titulo>Novo Colaborador:</Titulo>
              </BoxTitulo>

              <ContainerFormulario>
                <Wrapper>
                <BoxInputCustom >
                  <Label>Nome:</Label>
                  <InputDesktop />
                </BoxInputCustom>
                <BoxInputCustom >
                  <Label>Email:</Label>
                  <InputDesktop />
                </BoxInputCustom>
                </Wrapper>

                <Wrapper>
                <BoxInput>
                  <Label>Cpf:</Label>
                  <InputDesktop />
                </BoxInput>
                <BoxInput>
                  <Label>Senha:</Label>
                  <InputDesktop />
                </BoxInput>

                <BoxInput>
                  <Label>Permissão:</Label>
                  <Select>
                    
                  <option value="">Administrador</option>
                  <option value="">Estoquista</option>
                  <option value="">Vendedor</option>
                  
                  </Select>
                  
                </BoxInput>
                </Wrapper>

                <Wrapper>
                  <BoxInputCustom>
                  <BtnAdicionar> Adicionar </BtnAdicionar>
                  </BoxInputCustom>
                  </Wrapper>

              </ContainerFormulario>

            
            </BoxFormulario>
          </Section>

          
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default configuracao
