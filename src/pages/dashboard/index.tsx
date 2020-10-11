import React from 'react'
import Menu from '../../components/Menu'

import {
  Container,
  DivDivindoTela,
  DivCortandoTela,
  IconsTags,
  SpanTitulo,
  DivIconTags,
  DivSpan,
  DivImg
} from '../../../styles/dashboard'

const dashAdmin = () => {
  return (
    <>
      <Menu />
      <Container>
        <DivDivindoTela>
          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <DivSpan>
                  <SpanTitulo>Produtos</SpanTitulo>
                </DivSpan>
                <DivImg>
                  <img src="/image/produtos.svg" alt="" />
                </DivImg>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>
          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <DivSpan>
                  <SpanTitulo>Clientes</SpanTitulo>
                </DivSpan>
                <DivImg>
                  <img src="/image/clientes.svg" alt="" />
                </DivImg>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>

          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <DivSpan>
                  <SpanTitulo>Controles</SpanTitulo>
                </DivSpan>
                <DivImg>
                  <img src="/image/estatistica.svg" alt="" />
                </DivImg>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>
        </DivDivindoTela>

        <DivDivindoTela>
          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <DivSpan>
                  <SpanTitulo>Perfil</SpanTitulo>
                </DivSpan>
                <DivImg>
                  <img src="/image/admin.svg" alt="" />
                </DivImg>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>

          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <DivSpan>
                  <SpanTitulo>PDV</SpanTitulo>
                </DivSpan>
                <DivImg>
                  <img src="/image/codebar.svg" alt="" />
                </DivImg>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>

          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
              <DivSpan>
                  <SpanTitulo>Caixa</SpanTitulo>
                </DivSpan>
              <DivImg>
                  <img src="/image/closebox.svg" alt="" />
                </DivImg>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>
        </DivDivindoTela>
        <DivDivindoTela>
          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <SpanTitulo></SpanTitulo>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>

          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <SpanTitulo></SpanTitulo>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>

          <DivCortandoTela>
            <IconsTags>
              <DivIconTags>
                <SpanTitulo></SpanTitulo>
              </DivIconTags>
            </IconsTags>
          </DivCortandoTela>
        </DivDivindoTela>
      </Container>
    </>
  )
}
export default dashAdmin
