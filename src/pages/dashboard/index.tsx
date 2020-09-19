import {
  ContainerIcones,
  IconsTags,
  ContainerIconesLg,
  LabelProdutoDashboard,
  LabelDescricaoDashboard,
  LabelProdutoDashboardMenos,
  ContainerTudo,
  Container,
} from "./styles";

import Sidebar from "../../components/sidebar";
import Menu from "../../components/Menu";

const dashboard = () => {
  return (
    <>
      <Menu />
      <Container>
        <Sidebar />
        <ContainerTudo>
          <ContainerIconesLg>
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
          </ContainerIconesLg>

          <ContainerIconesLg></ContainerIconesLg>

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
              {" "}
              <img src="/image/estatistica.svg" alt="" />
            </IconsTags>
            <IconsTags>
              <img src="/image/admin.svg" alt="" />
            </IconsTags>
          </ContainerIcones>
        </ContainerTudo>
      </Container>
    </>
  );
};
export default dashboard;
