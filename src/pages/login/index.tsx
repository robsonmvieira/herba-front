import React from 'react'
import {
  Container,
  InputFormLogin,
  LabelLogin,
  FormLogin,
  BtnLogin,
  Side,
  Title,
  Wapper,
  FormTitle
} from './styles'
import Menu from '../../components/Menu'

const Login = () => {
  return (
    <>
      <Menu />

      <Container>
        <Wapper>
          <Side>
            <Title> Life Admin</Title>
          </Side>
          <Side>
            <FormLogin>
              <FormTitle>Login</FormTitle>
              <LabelLogin>Nome:</LabelLogin>
              <InputFormLogin />
              <LabelLogin style={{ marginTop: 25 }}>Email:</LabelLogin>
              <InputFormLogin />
              <BtnLogin>Logar</BtnLogin>
            </FormLogin>
          </Side>
        </Wapper>
      </Container>
    </>
  )
}
export default Login
