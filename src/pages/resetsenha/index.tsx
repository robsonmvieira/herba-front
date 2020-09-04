import {
  Container,
  InputFormLogin,
  LabelLogin,
  FormLogin,
  BtnEnviar,
  ContainerDivisao,
  LabelLifeAdmin,
  ContainerTela,
  LabelRestar,
} from "./styles";
import Menu from "../../components/Menu";
import ModalExample from "../../pages/modalresetsenha";

const ResetSenha = () => {
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
              <LabelRestar>Resetar Senha </LabelRestar>
              <LabelLogin style={{ marginTop: 25 }}>Email:</LabelLogin>
              <InputFormLogin></InputFormLogin>

              <BtnEnviar onClick={ModalExample}> Enviar</BtnEnviar>
            </FormLogin>
          </ContainerDivisao>
        </ContainerTela>
      </Container>
    </>
  );
};
export default ResetSenha;
