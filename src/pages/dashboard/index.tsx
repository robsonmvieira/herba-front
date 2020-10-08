import React from 'react'
import Menu from '../../components/Menu'
import Sidebar from '../../components/sidebar'

import {
  Container,
  DivDivindoTela,
  DivCortandoTela,
  IconsTags
} from '../../../styles/dashboard'

const dashAdmin = () => {
  return (
    <>
      <Menu />
      <Container>
        <DivDivindoTela>
          <DivCortandoTela>
            <IconsTags>
              <img src="/image/produtos.svg" alt="" />
            </IconsTags>
          </DivCortandoTela>
          <DivCortandoTela>
            <IconsTags>
              <img src="/image/clientes.svg" alt="" />
            </IconsTags>
          </DivCortandoTela>
        </DivDivindoTela>
        <DivDivindoTela>
          <DivCortandoTela>
            <IconsTags>
              <img src="/image/estatistica.svg" alt="" />
            </IconsTags>
          </DivCortandoTela>
          <DivCortandoTela>
            <IconsTags>
              <img src="/image/admin.svg" alt="" />
            </IconsTags>
          </DivCortandoTela>
        </DivDivindoTela>
      </Container>
    </>
  )
}
export default dashAdmin
