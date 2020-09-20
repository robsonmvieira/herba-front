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

const dashboard = () => {
  return (
    <>
      <Menu />
      <Container>
        <Sidebar />
        <ContainerTudo>
          <ContainerIconesLg>
            <ContainerTags>
              <IconsTags>
                <LabelProdutoDashboard>35</LabelProdutoDashboard>
                <LabelDescricaoDashboard>
                  Produto cadastrados
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelProdutoDashboard>Sopa de ninhaça</LabelProdutoDashboard>
                <LabelDescricaoDashboard>Mais vendido</LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelProdutoDashboardMenos>5</LabelProdutoDashboardMenos>
                <LabelDescricaoDashboard>
                  Produtos zerados
                </LabelDescricaoDashboard>
              </IconsTags>
              <IconsTags>
                <LabelProdutoDashboardMenos>
                  Suco de coca
                </LabelProdutoDashboardMenos>
                <LabelDescricaoDashboard>Menos vendido</LabelDescricaoDashboard>
              </IconsTags>
            </ContainerTags>
          </ContainerIconesLg>

          <ContainerListaLg>
            <ContainerList>
              <SpanListTh>Nome</SpanListTh>
              <SpanListTh>Preço</SpanListTh>
              <SpanListTh>Estoque</SpanListTh>
              <SpanListTh>Edit</SpanListTh>
              <SpanListTh>Del</SpanListTh>
              <SpanListTh></SpanListTh>
            </ContainerList>
            <ContainerList>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
              <SpanListTd></SpanListTd>
            </ContainerList>
            <ContainerList>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
              <SpanListTd></SpanListTd>
            </ContainerList>
            <ContainerList>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
              <SpanListTd></SpanListTd>
            </ContainerList>
            <ContainerList>
              <SpanListTd>Sopa Magica </SpanListTd>
              <SpanListTd>R$15,00</SpanListTd>
              <SpanListTd>20</SpanListTd>
              <SpanListTd>
                <img src="/image/edit.svg" alt="" />
              </SpanListTd>
              <SpanListTd>
                <img src="/image/lixeira.svg" alt="" />
              </SpanListTd>
              <SpanListTd></SpanListTd>
            </ContainerList>
          </ContainerListaLg>

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
        </ContainerTudo>
      </Container>
    </>
  )
}
export default dashboard
