import {
  Container,
  ContainerIcones,
  IconsTags

} from "./styles";

import Menu from "../../components/Menu";

const dashboard = () => {
  return (
    <>
      <Menu />

      <Container>
<ContainerIcones>
<IconsTags>
  <img src="/image/produtos.svg" alt=""/>
</IconsTags>
<IconsTags>
  <img src="/image/clientes.svg" alt=""/>
</IconsTags>
</ContainerIcones>
<ContainerIcones>
<IconsTags> <img src="/image/estatistica.svg" alt=""/>
</IconsTags>
<IconsTags>
<img src="/image/admin.svg" alt=""/>
</IconsTags>
</ContainerIcones>




      </Container>
    </>
  );
};
export default dashboard;
