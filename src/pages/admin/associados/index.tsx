import React, { useCallback } from 'react'
import { Container } from '../../../../styles/associados'
import Input from '../../../components/Input'
import { Form } from '@unform/web'
import {} from './styles'
const Associados = () => {
  const handleSubmit = useCallback(() => {
    console.log('log')
  }, [])
  return (
    <Container>
      <h2>Associados</h2>
      <Form onSubmit={handleSubmit}>
        <label>Nome</label>
        <Input name="Name" />

        <label>Password</label>
        <Input name="PassWord" />

        <label>email</label>
        <Input name="Email" />

        <label>isAdmin</label>
        <Input type="checkbox" name="IsAdmin" />

        <label>Posição</label>
        <select name="Roles" />

        <label>Permissão</label>
        <select name="permissions" />
      </Form>
    </Container>
  )
}
export default Associados
