import React from 'react'
import {
  ContainerIcones,
  IconsTags,
  ContainerIconesLg,
  LabelProdutoDashboard,
  LabelDescricaoDashboard,
  LabelProdutoDashboardMenos,
  ContainerTudo,
  Container,
  ContainerListaLg,
  ContainerList,
  ContainerTags,
  SpanListTh,
  SpanListTd
} from './styles'

import Sidebar from '../../components/sidebar'
import Menu from '../../components/Menu'

const MenuSide = () => {
  return (
    <>
      {/* <Menu /> */}
      {/* <Container> */}
      <Sidebar />

      <ContainerIcones>
        <IconsTags>
          <img src="/image/produtos.svg" alt="" />
        </IconsTags>
        <IconsTags>
          <img src="/image/clientes.svg" alt="" />
        </IconsTags>
      </ContainerIcones>
      <ContainerIcones>
        <IconsTags>
          {' '}
          <img src="/image/estatistica.svg" alt="" />
        </IconsTags>
        <IconsTags>
          <img src="/image/admin.svg" alt="" />
        </IconsTags>
      </ContainerIcones>
      {/* </Container> */}
    </>
  )
}
export default MenuSide
