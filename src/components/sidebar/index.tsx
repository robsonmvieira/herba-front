import React from 'react'

import { Container, ContainerSide, ContainerIcones, IconsTags } from './styles'
import Link from 'next/link'
import Menu from '../../components/Menu'

const Sidebar = () => {
  return (
    <>
      <Container>
        <ContainerSide style={{ marginTop: '92px' }}>
          <Link href="/Produtos">
            <a style={{ textDecoration: 'none', color: '#fff' }}>Produtos</a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/Clientes">
            <a style={{ textDecoration: 'none', color: '#fff' }}>Clientes</a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/Estatisticas">
            <a style={{ textDecoration: 'none', color: '#fff' }}>
              Estatísticas
            </a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/Config">
            <a style={{ textDecoration: 'none', color: '#fff' }}>Config.</a>
          </Link>
        </ContainerSide>
      </Container>
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
    </>
  )
}
export default Sidebar
