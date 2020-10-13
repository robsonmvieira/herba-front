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
                  <Title>Produtos</Title>
                </BoxCustom>
                <DivImg>
                  <img src="/image/produtos.svg" alt="" />
                </DivImg>
              </BoxSpan>
            </IconsTags>
          </Grid>
          <Grid>
            <IconsTags>
              <BoxSpan>
                <BoxCustom>
                  <Title>Clientes</Title>
                </BoxCustom>
                <DivImg>
                  <img src="/image/clientes.svg" alt="" />
                </DivImg>
              </BoxSpan>
            </IconsTags>
          </Grid>

          <Grid>
            <IconsTags>
              <BoxSpan>
                <BoxCustom>
                  <Title>Controles</Title>
                </BoxCustom>
                <DivImg>
                  <img src="/image/estatistica.svg" alt="" />
                </DivImg>
              </BoxSpan>
            </IconsTags>
          </Grid>
        </ContainerGrid>

        <ContainerGrid>
          <Grid>
            <IconsTags>
              <BoxSpan>
                <BoxCustom>
                  <Title>Perfil</Title>
                </BoxCustom>
                <DivImg>
                  <img src="/image/admin.svg" alt="" />
                </DivImg>
              </BoxSpan>
            </IconsTags>
          </Grid>

          <Grid>
            <IconsTags>
              <BoxSpan>
                <BoxCustom>
                  <Title>PDV</Title>
                </BoxCustom>
                <DivImg>
                  <img src="/image/codebar.svg" alt="" />
                </DivImg>
              </BoxSpan>
            </IconsTags>
          </Grid>

          <Grid>
            <IconsTags>
              <BoxSpan>
                <BoxCustom>
                  <Title>Caixa</Title>
                </BoxCustom>
                <DivImg>
                  <img src="/image/closebox.svg" alt="" />
                </DivImg>
              </BoxSpan>
            </IconsTags>
          </Grid>
        </ContainerGrid>
        <ContainerGrid>
          <Grid>
            <IconsTags>
              <BoxSpan>
                <Title></Title>
              </BoxSpan>
            </IconsTags>
          </Grid>

          <Grid>
            <IconsTags>
              <BoxSpan>
                <Title></Title>
              </BoxSpan>
            </IconsTags>
          </Grid>

          <Grid>
            <IconsTags>
              <BoxSpan>
                <Title></Title>
              </BoxSpan>
            </IconsTags>
          </Grid>
        </ContainerGrid>
      </Container>
    </>
  )
}
export default dashAdmin
