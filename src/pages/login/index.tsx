import React from 'react'
import {
  Container,
  LabelLogin,
  BtnLogin,
  Side,
  Title,
  Wapper,
  FormTitle
} from './styles'
import Menu from '../../components/Menu'
import Input from '../../components/Input'
import { Form } from '@unform/web'
import api from '../../services/api'

interface userLogin {
  email: string
  password: string
}
const Login = () => {
  async function handleSubmit({ email, password }: userLogin) {
    try {
      const resp = await api.post('sessions/login', { email, password })
      const { data } = resp
      localStorage.setItem('token', data)
    } catch (error) {
      if (error.response.status === 401) {
        console.log('você não tem autorização pra continuar')
      }
    }
  }

  return (
    <>
      <Menu />
      <Container>
        <Wapper>
          <Side>
            <Title> Life Admin</Title>
          </Side>
          <Side>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Login</FormTitle>
              <LabelLogin>Email:</LabelLogin>
              <Input name="email" />
              <LabelLogin style={{ marginTop: 25 }}>Senha:</LabelLogin>
              <Input name="password" type="password" />
              <BtnLogin>Logar</BtnLogin>
            </Form>
          </Side>
        </Wapper>
      </Container>
    </>
  )
}
export default Login
