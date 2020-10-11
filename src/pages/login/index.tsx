import React, { useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
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
  BtnToast,
  Toast,
  ToastBody,
  ToastHeader
} from './styles'
import Menu from '../../components/Menu'
import Input from '../../components/Input'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import apiService from '../../services/apiService'
import { useRouter } from 'next/router'

interface UserLogin {
  email: string
  password: string
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  //   const token = req.headers.cookie
  //   if (token) {
  //     res.statusCode = 302
  //     // res.setHeader('Location', '/pdv')
  //     res.end()
  //     return { props: {} }
  //   }
  return { props: {} }
}

const Login = () => {
  // const router = useRouter()
  const [errorNumber, setErrorNumber] = useState<number>(0)
  const [toastOpen, setToastOpen] = useState<boolean>(true)

  function closeToast() {
    setToastOpen(false)
  }
  const formRef = useRef(null)
  async function handleSubmit(
    { email, password }: UserLogin,
    { reset },
    e: React.FormEvent<HTMLInputElement>
  ) {
    e.preventDefault()
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
      const response = await apiService.post(
        '/sessions',
        { email, password },
        { withCredentials: true }
      )
      console.log('76', response.data)
      // router.push('/pdv')
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message
        })
        formRef.current.setErrors(validationErrors)
        return
      }

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
          <Side>
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
                  <Toast isOpen={toastOpen}>
                    <ToastHeader>
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
