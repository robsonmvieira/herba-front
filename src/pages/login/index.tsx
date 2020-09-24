import React, { useRef, useState } from 'react'
import Router from 'next/router'
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
import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import * as Yup from 'yup'

interface userLogin {
  email: string
  password: string
}
const Login = () => {
  const [errorNumber, setErrorNumber] = useState(0)
  const [toastOpen, setToastOpen] = useState(true)

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
        {errorNumber === 401 && (
          <div className="p-3 my-2 rounded">
            <Toast style={{ background: 'red' }}>
              <ToastHeader style={{ color: '#fff', background: 'red' }}>
                Não Autorizado
              </ToastHeader>
              <ToastBody style={{ color: '#fff' }}>
                Email ou Senha estão incorretos
              </ToastBody>
            </Toast>
          </div>
        )}
        {errorNumber === 500 && (
          <div className="p-3 my-2 rounded">
            <Toast isOpen={toastOpen}>
              <ToastHeader>
                <span>Erro Interno</span>
                <button type="button" onClick={closeToast}>
                  x
                </button>
              </ToastHeader>
              <ToastBody>
                Ocorreu um erro interno. Por favor tente mais tarde.
              </ToastBody>
            </Toast>
          </div>
        )}
        <Wapper>
          <Side>
            <Title> Life Admin</Title>
          </Side>
          <Side>
            <Form ref={formRef} onSubmit={handleSubmit}>
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
