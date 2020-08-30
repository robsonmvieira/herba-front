import {
  Container,
  InputFormLogin,
  LabelLogin,
  FormLogin,
  BtnLogin,
} from "./styles";
import Menu from "../../components/Menu";

const Login = () => {
  return (
    <>
      <Container>
        <Menu />

        <FormLogin>
          <LabelLogin>Nome:</LabelLogin>
          <InputFormLogin></InputFormLogin>
          <LabelLogin style={{ marginTop: 25 }}>Email:</LabelLogin>
          <InputFormLogin></InputFormLogin>
          <BtnLogin>Logar</BtnLogin>
        </FormLogin>
      </Container>
    </>
  );
};
export default Login;
