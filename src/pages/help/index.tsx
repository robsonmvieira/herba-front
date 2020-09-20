import {
  Container,
  LabelHelpDesk,
  FormHelp,
  LabelMarca,
  ContainerDivisao,
  Title,
  Wapper,
  BoxTitle,
} from "./styles";
import Menu from "../../components/Menu";

const Help = () => {
  return (
    <>
      <Menu />

      <Container>
        <Wapper>
          <ContainerDivisao>
            <Title> Life Admin</Title>
          </ContainerDivisao>

          <ContainerDivisao>
            <FormHelp>
              <BoxTitle>Help Desk</BoxTitle>
              <LabelHelpDesk>
                Se Você precisa de ajuda ou recebeu algum erro ao tentar
                realizar uma operação no sistema ou precisa de alguma informação
                adicional. Por favor entre em contato com o email:
                lifeadmin@contato.com informando seu elogio/solicitação /duvida
                /sugestão/ reclamação.
              </LabelHelpDesk>
              <LabelHelpDesk>
                Produzido pela
                <LabelMarca> Twoth Tecnologia.</LabelMarca>
              </LabelHelpDesk>
            </FormHelp>
          </ContainerDivisao>
        </Wapper>
      </Container>
    </>
  );
};
export default Help;
