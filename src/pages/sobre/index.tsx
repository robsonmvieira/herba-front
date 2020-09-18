import {
  Container,
  LabelSobre,
  FormSobre,
  LabelMarca,
  ContainerDivisao,
  LabelLifeAdmin,
  ContainerTela,
  LabelsobreH1,
} from "./styles";
import Menu from "../../components/Menu";

const Sobre = () => {
  return (
    <>
      <Menu />

      <Container>
        <ContainerTela>
          <ContainerDivisao>
            <LabelLifeAdmin> Life Admin</LabelLifeAdmin>
          </ContainerDivisao>

          <ContainerDivisao>
            <FormSobre>
              <LabelsobreH1>Sobre</LabelsobreH1>
              <LabelSobre>
                O Sistema Life Admin é um sistema de gerenciamento do seu ponto
                de venda de forma automática lhe proporcionando autonomia e
                confiança. Ele é integrado com seu estoque, evitando surpresas
                Desagradáveis no momento da sua venda.
              </LabelSobre>
              <LabelSobre>
                Produzido pela
                <LabelMarca> Twoth Tecnologia.</LabelMarca>
              </LabelSobre>
            </FormSobre>
          </ContainerDivisao>
        </ContainerTela>
      </Container>
    </>
  );
};
export default Sobre;
