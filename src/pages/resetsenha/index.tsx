import {
  Container,
  InputFormReset,
  LabelEmail,
  FormReset,
  BtnEnviar,
  ContainerDivisao,
  LabelLifeAdmin,
  ContainerTela,
  LabelResetar,
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
            <FormReset>
              <LabelResetar>Resetar Senha </LabelResetar>
              <LabelEmail style={{ marginTop: 25 }}>Email:</LabelEmail>
              <InputFormReset></InputFormReset>

              <BtnEnviar onClick={ModalExample}> Enviar</BtnEnviar>
            </FormReset>
          </ContainerDivisao>
        </ContainerTela>
      </Container>
    </>
  );
};
export default ResetSenha;
