import {
  Container,
  InputFormLogin,
  LabelHelpDesk,
  FormLogin,
  LabelMarca,
  ContainerDivisao,
  LabelLifeAdmin,
  ContainerTela,
  LabelHelpDeskH1,
} from "./styles";
import Menu from "../../components/Menu";

const Help = () => {
  return (
    <>
      <Menu />

      <Container>
        <ContainerTela>
          <ContainerDivisao>
            <LabelLifeAdmin> Life Admin</LabelLifeAdmin>
          </ContainerDivisao>

          <ContainerDivisao>
            <FormLogin>
              <LabelHelpDeskH1>Help Desk</LabelHelpDeskH1>
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
            </FormLogin>
          </ContainerDivisao>
        </ContainerTela>
      </Container>
    </>
  );
};
export default Help;
