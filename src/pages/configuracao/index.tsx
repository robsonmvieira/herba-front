import React from 'react'
import {
  ContainerIconsLg,
  Container,
  ContainerNovoCliente,
  ContainerConteudo,
  ContainerTituloNovoCliente,
  Titulo,
  ContainerListAdicionarDesktop,
  LabelParaDesktop,
  InputDesktop,
  BtnAdicionarDesktop,
  ContainerAdicionarDesktopCustom,
  SelectDesktop,
  BoxStylesDiv,
  ContainerDesktop,
  ContainerDesktopCustom,
  ContainerSide
  
} from '../../../styles/configuracao'

import Sidebar from '../../components/sidebar'
import Menu from '../../components/Menu'

const configuracao = () => {
  return (
    <>
      <Menu></Menu>

      <Container>
      <ContainerSide>
          <Sidebar />
        </ContainerSide>
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
                <ContainerDesktop>
                  <LabelParaDesktop>Cpf:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerDesktop>
                <ContainerDesktop>
                  <LabelParaDesktop>Senha:</LabelParaDesktop>
                  <InputDesktop />
                </ContainerDesktop>

                <ContainerDesktop>
                  <LabelParaDesktop>Permissão:</LabelParaDesktop>
                  <SelectDesktop>
                    
                  <option value="">Administrador</option>
                  <option value="">Estoquista</option>
                  <option value="">Vendedor</option>
                  
                  </SelectDesktop>



                  
                </ContainerDesktop>
                </BoxStylesDiv>

                <BoxStylesDiv>
                  <ContainerDesktopCustom>
                  <BtnAdicionarDesktop> Adicionar </BtnAdicionarDesktop>
                  </ContainerDesktopCustom>
                  </BoxStylesDiv>

              </ContainerListAdicionarDesktop>

            
            </ContainerNovoCliente>
          </ContainerIconsLg>

          
        </ContainerConteudo>
      </Container>
    </>
  )
}
export default configuracao
