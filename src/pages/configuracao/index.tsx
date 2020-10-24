import React from 'react'
import {
  ContainerIconsLg,
  Container,
  ContainerNovoCliente,
  ContainerConteudo,
  ContainerTituloNovoCliente,
  Titulo,
  ContainerAdicionarDesktop,
  ContainerListAdicionarDesktop,
  LabelParaDesktop,
  InputDesktop,
  BtnAdicionarDesktop,
  ContainerAdicionarDesktopCustom,
  BoxAdicionarDesktopCustom,
  SelectDesktop,
  BoxStylesDiv
  
} from './styles'

import Sidebar from '../../components/sidebar'
import Menu from '../../components/Menu'

const configuracao = () => {
  return (
    <>
      <Menu></Menu>

      <Container>
        
        <ContainerConteudo>
         

          <ContainerIconsLg>
            <ContainerNovoCliente>
              <ContainerTituloNovoCliente>
                <Titulo>Novo Colaborador:</Titulo>
              </ContainerTituloNovoCliente>

              <ContainerListAdicionarDesktop>
                <BoxStylesDiv>
                <ContainerAdicionarDesktopCustom >
                  <LabelParaDesktop>Nome:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
                <ContainerAdicionarDesktopCustom >
                  <LabelParaDesktop>Email:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
                </BoxStylesDiv>

                <BoxStylesDiv>
                <ContainerAdicionarDesktopCustom>
                  <LabelParaDesktop>Cpf:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>
                <ContainerAdicionarDesktopCustom>
                  <LabelParaDesktop>Senha:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerAdicionarDesktopCustom>

                <ContainerAdicionarDesktopCustom>
                  <LabelParaDesktop>Permissão:</LabelParaDesktop>
                  <SelectDesktop>
                  <option value="">Administrador</option>
                  <option value="">Estoquista</option>
                  <option value="">Vendedor</option>

                  </SelectDesktop>
                </ContainerAdicionarDesktopCustom>
                </BoxStylesDiv>

               
                <BoxAdicionarDesktopCustom >
                  <BtnAdicionarDesktop> Adicionar </BtnAdicionarDesktop>
                </BoxAdicionarDesktopCustom>
               

              </ContainerListAdicionarDesktop>

            
            </ContainerNovoCliente>
          </ContainerIconsLg>

          
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default configuracao
