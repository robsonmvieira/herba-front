import React from 'react'

import { Container, ContainerSide, ContainerIcones, IconsTags } from './styles'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <Container>
        <ContainerSide style={{ marginTop: '92px' }}>
          <Link href="/dashboard">
            <a style={{ textDecoration: 'none', color: '#fff' }}>Painel</a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/dashboard/clientes">
            <a style={{ textDecoration: 'none', color: '#fff' }}>Clientes</a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/dashboard/produtos">
            <a style={{ textDecoration: 'none', color: '#fff' }}>Produtos</a>
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
          <Link href="/configuracao">
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
