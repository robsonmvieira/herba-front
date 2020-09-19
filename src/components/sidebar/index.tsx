import { Container, ContainerSide } from "./styles";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Container>
        <ContainerSide style={{ marginTop: "92px" }}>
          <Link href="/Produtos">
            <a style={{ textDecoration: "none", color: "#fff" }}>Produtos</a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/Clientes">
            <a style={{ textDecoration: "none", color: "#fff" }}>Clientes</a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/Estatisticas">
            <a style={{ textDecoration: "none", color: "#fff" }}>
              Estatísticas
            </a>
          </Link>
        </ContainerSide>

        <ContainerSide>
          <Link href="/Config">
            <a style={{ textDecoration: "none", color: "#fff" }}>Config.</a>
          </Link>
        </ContainerSide>
      </Container>
    </>
  );
};
export default Sidebar;
