import React, { useRef, useState } from 'react'
import Router from 'next/router'
import {
  Container,
  LabelLogin,
  BtnLogin,
  Side,
  Title,
  Wapper,
  FormTitle,
  ContainerLife,
  ContainerToast,
  BtnToast
} from './styles'
import Menu from '../../components/Menu'
import Input from '../../components/Input'
import { Form } from '@unform/web'
import api from '../../services/api'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import * as Yup from 'yup'

interface userLogin {
  email: string
  password: string
}
const Login = () => {
  const [errorNumber, setErrorNumber] = useState<number>(0)
  const [toastOpen, setToastOpen] = useState<boolean>(true)

  function closeToast() {
    setToastOpen(false)
  }
  const formRef = useRef(null)
  async function handleSubmit({ email, password }: userLogin, { reset }) {
    try {
      formRef.current.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6)
      })

      await schema.validate(
        { email, password },
        {
          abortEarly: false
        }
      )
      // validation ok
      const resp = await api.post('sessions/login', { email, password })
      const { data } = resp
      localStorage.setItem('token', data)
      Router.push('/dashboard')
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message
        })
        formRef.current.setErrors(validationErrors)
        return
      }
      console.log('loguei erro => ', error)

      if (!error.status) {
        setErrorNumber(500)
        return
      }

      if (error.response.status === 401) {
        // validationErrors[error.path] = error.message
        // formRef.current.setErrors(validationErrors)
        setErrorNumber(401)
      }
      if (error.response.status === 500) {
        setErrorNumber(500)
      }
    } finally {
      reset()
    }
  }

  return (
    <>
      <Menu />
      <Container>
        <Wapper>
          <Side
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              marginRight: '20px'
            }}
          >
            {errorNumber === 401 && (
              <div className="p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>Não Autorizado</ToastHeader>
                  <ToastBody>Email ou Senha estão incorretos</ToastBody>
                </Toast>
              </div>
            )}

            <ContainerLife>
              <Title> Life Admin</Title>
            </ContainerLife>
          </Side>
          <Side>
            <ContainerToast>
              {errorNumber === 500 && (
                <div className="p-3 my-2 rounded" style={{ maxWidth: '100%' }}>
                  <Toast
                    isOpen={toastOpen}
                    style={{ color: '#9C0606', background: '#C08B8E' }}
                  >
                    <ToastHeader
                      style={{ color: '#9C0606', background: '#C08B8E' }}
                    >
                      <span>Erro Interno</span>
                      <BtnToast onClick={closeToast}>x</BtnToast>
                    </ToastHeader>
                    <ToastBody>
                      Ocorreu um erro interno. Por favor tente mais tarde.
                    </ToastBody>
                  </Toast>
                </div>
              )}
            </ContainerToast>
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <FormTitle>Login</FormTitle>
              <LabelLogin>Email:</LabelLogin>
              <Input placeholder="Digite seu email" name="email" />
              <LabelLogin style={{ marginTop: 25 }}>Senha:</LabelLogin>
              <Input
                placeholder="Digite sua senha"
                name="password"
                type="password"
              />
              <BtnLogin>Logar</BtnLogin>
            </Form>
          </Side>
        </Wapper>
      </Container>
    </>
  )
}
export default Login
