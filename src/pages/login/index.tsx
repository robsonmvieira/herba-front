import {
  Container,
  InputFormLogin,
  LabelLogin,
  FormLogin,
  BtnLogin,
  ContainerDivisao,
  LabelLifeAdmin,
  ContainerTela,
} from "./styles";
import Menu from "../../components/Menu";

const Login = () => {
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
              <LabelLogin>Nome:</LabelLogin>
              <InputFormLogin></InputFormLogin>
              <LabelLogin style={{ marginTop: 25 }}>Email:</LabelLogin>
              <InputFormLogin></InputFormLogin>
              <BtnLogin>Logar</BtnLogin>
            </FormLogin>
          </ContainerDivisao>
        </ContainerTela>
      </Container>
    </>
  );
};
export default Login;
