import React from 'react'
import Menu from '../../components/Menu'

import {
  Container,
  ContainerGrid,
  Grid,
  IconsTags,
  Title,
  BoxSpan,
  BoxCustom,
  DivImg
} from '../../../styles/dashboard'
  import Link from 'next/link'


const dashAdmin = () => {
  return (
    <>
      <Menu />
      <Container>
        <ContainerGrid>
        <Grid>
          <IconsTags>
            <BoxSpan>
              <BoxCustom>
                <Title >Produtos</Title>
                <Link href="/dashboard/produtos">
                 <a>
                  <DivImg>
                    <img src="/image/produtos.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>
          
        <Grid>
          <IconsTags>
            <BoxSpan>
              <BoxCustom>

                <Title >Clientes</Title>
                <Link href="/dashboard/clientes">
                 <a>
                  <DivImg>
                    <img src="/image/clientes.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>

        <Grid>
          <IconsTags>
            <BoxSpan>
              <BoxCustom>
                <Title >Controles</Title>
                <Link href="/">
                 <a>
                  <DivImg>
                    <img src="/image/estatistica.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>
      </ContainerGrid>

      <ContainerGrid>
        <Grid>
          <IconsTags>
            <BoxSpan>
              <BoxCustom>
                <Title >Configurações</Title>
                <Link href="/configuracao">
                 <a>
                  <DivImg>
                    <img src="/image/admin.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>

        <Grid>
          <IconsTags>
            <BoxSpan>
              <BoxCustom>
                <Title >PDV</Title>
                <Link href="/pdv">
                 <a>
                  <DivImg>
                    <img src="/image/codebar.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>

        <Grid>
          <IconsTags>
            <BoxSpan>
              <BoxCustom>
                <Title >PDD</Title>
                <Link href="/pdd">
                 <a>
                  <DivImg>
                    <img src="/image/closebox.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>
      </ContainerGrid>



      <ContainerGrid>
        <Grid>
          <IconsTags>
            <BoxSpan>
            <BoxCustom>
                <Title >Estatisticas</Title>
                <Link href="dashboard/estatisticas">
                 <a>
                  <DivImg>
                    <img src="/image/stats.svg" alt="" />
                  </DivImg>
                 </a>
                </Link>
              </BoxCustom>
            </BoxSpan>
          </IconsTags>
        </Grid>

        <Grid>
          <IconsTags>
            <BoxSpan>
              
            </BoxSpan>
          </IconsTags>
        </Grid>

        <Grid>
          <IconsTags>
            <BoxSpan>
              
            </BoxSpan>
          </IconsTags>
        </Grid>

      </ContainerGrid>
    </Container>
    </>
  )
}
export default dashAdmin
