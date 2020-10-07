import React, { useState, useRef, useCallback } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  Container,
  DivDivindoTela,
  DivDivindoTelaHorizontal,
  DivDivindoTelaHorizontalSpan,
  LabelSpan,
  DivDivindoTelaHorizontalDash,
  DivDashs,
  Button,
  DivDashsInterno
} from '../../../styles/admin'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Input from '../../components/Input'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import apiService from '../../services/apiService'
interface FormDataSubmit {
  name: string
  description: string
}
interface Roles {
  id: string
  name: string
  slug: string
  description: string
}

const Admin = ({
  roles
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const createRoleRef = useRef(null)
  const createPermissionRef = useRef(null)

  const [errorNumber, setErrorNumber] = useState<number>(0)
  const [
    modaltoggleCreateAssociados,
    setModaltoggleCreateAssociados
  ] = useState(false)

  const [modaltoggleCreateRoles, setModaltoggleCreateRoles] = useState(false)
  const [modaltoggleCreatePositions, setModaltoggleCreatePositions] = useState(
    false
  )
  const [modaltoggleListRoles, setModaltoggleListRoles] = useState(false)
  const [modaltoggleListPositions, setModaltoggleListPositions] = useState(
    false
  )

  const toggleModalCreateAssociados = () =>
    setModaltoggleCreateAssociados(!modaltoggleCreateAssociados)

  const toggleModalListPositions = () =>
    setModaltoggleListPositions(!modaltoggleListPositions)

  const toggleModalCreatePositions = () =>
    setModaltoggleCreatePositions(!modaltoggleCreatePositions)

  const toggleModalListRoles = () =>
    setModaltoggleListRoles(!modaltoggleListRoles)

  const toggleModalCreateRoles = () =>
    setModaltoggleCreateRoles(!modaltoggleCreateRoles)

  async function handleRoleSubmit(
    { name, description }: FormDataSubmit,
    { reset }
  ) {
    // toggleModalCreateRoles()
    const slug = name.split(' ').join('-')
    try {
      createRoleRef.current.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        slug: Yup.string().required(),
        description: Yup.string().required()
      })

      await schema.validate(
        { name, slug, description },
        {
          abortEarly: false
        }
      )

      // validacao ok
      const response = await apiService.post('/roles', {
        name,
        slug,
        description
      })
      console.log(response.data)
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message
        })
        createRoleRef.current.setErrors(validationErrors)
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
    // reset()
  }
  const handlePermissionSubmit = useCallback(
    ({ name, description }: FormDataSubmit, { reset }) => {
      console.log('permissao')
      toggleModalCreatePositions()
      reset()
    },
    []
  )

  return (
    <Container>
      <DivDivindoTela>
        <DivDivindoTelaHorizontalDash>
          <DivDashs>
            <DivDashsInterno></DivDashsInterno>
            <DivDashsInterno></DivDashsInterno>
            <DivDashsInterno></DivDashsInterno>
            <DivDashsInterno></DivDashsInterno>
            <DivDashsInterno></DivDashsInterno>
          </DivDashs>
        </DivDivindoTelaHorizontalDash>
      </DivDivindoTela>
      <DivDivindoTela>
        <DivDivindoTelaHorizontalSpan>
          <LabelSpan>Permissões</LabelSpan>
        </DivDivindoTelaHorizontalSpan>
        <DivDivindoTelaHorizontal>
          <div>
            <Button color="danger" onClick={toggleModalCreateRoles}>
              Nova Posição
            </Button>

            <Modal
              isOpen={modaltoggleCreateRoles}
              toggle={toggleModalCreateRoles}
            >
              <ModalHeader toggle={toggleModalCreateRoles}>
                Nova Posição
              </ModalHeader>
              <ModalBody>
                <Form ref={createRoleRef} onSubmit={handleRoleSubmit}>
                  <label>Name</label>
                  <Input name="name"></Input>
                  <label>Description</label>
                  <Input name="description"></Input>
                  <Button color="primary">Salvar</Button>
                  <Button color="secondary" onClick={toggleModalCreateRoles}>
                    Cancelar
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>

          {/* new permission */}

          <div>
            <Button color="danger" onClick={toggleModalCreatePositions}>
              Nova Permissão
            </Button>
            <Modal
              isOpen={modaltoggleCreatePositions}
              toggle={toggleModalCreatePositions}
            >
              <ModalHeader toggle={toggleModalCreatePositions}>
                Nova Permissão
              </ModalHeader>
              <ModalBody>
                <Form
                  ref={createPermissionRef}
                  onSubmit={handlePermissionSubmit}
                >
                  <label>Name</label>
                  <Input name="Name"></Input>
                  <label>Description</label>
                  <Input name="Description"></Input>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleModalCreatePositions}>
                  Salvar
                </Button>{' '}
                <Button color="secondary" onClick={toggleModalCreatePositions}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </div>

          {/*  List Roles modal */}

          <div>
            <Button color="danger" onClick={toggleModalListRoles}>
              Listar Posições
            </Button>
            <Modal isOpen={modaltoggleListRoles} toggle={toggleModalListRoles}>
              <ModalHeader toggle={toggleModalListRoles}>
                Listar Posições
              </ModalHeader>
              <ModalBody>
                <ul>
                  {roles.map(el => (
                    <li key={el.id}>
                      <div>
                        <span>Name: </span>
                        <span>{el.name}</span>
                      </div>
                      <div>
                        <span>Slug: </span>
                        <span>{el.slug}</span>
                      </div>
                      <div>
                        <span>Description: </span>
                        <span>{el.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggleModalListRoles}>
                  Fechar
                </Button>
              </ModalFooter>
            </Modal>
          </div>

          {/* Permissions List */}

          <div>
            <Button color="danger" onClick={toggleModalListPositions}>
              Listar Permissões
            </Button>
            <Modal
              isOpen={modaltoggleListPositions}
              toggle={toggleModalListPositions}
            >
              <ModalHeader toggle={toggleModalListPositions}>
                Listar Posições
              </ModalHeader>
              <ModalBody>
                <ul>
                  <li>
                    <div>
                      <span>Name:</span>
                      <span>Associado</span>
                    </div>
                    <div>
                      <span>Slug:</span>
                      <span>Associado</span>
                    </div>
                    <div>
                      <span>Description:</span>
                      <span>Associado</span>
                    </div>
                  </li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleModalListPositions}>
                  Salvar
                </Button>{' '}
                <Button color="secondary" onClick={toggleModalListPositions}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </DivDivindoTelaHorizontal>

        <DivDivindoTelaHorizontalSpan>
          <LabelSpan>Associados</LabelSpan>
        </DivDivindoTelaHorizontalSpan>
        <DivDivindoTelaHorizontal>
          <div>
            <Button color="danger" onClick={toggleModalCreateAssociados}>
              Criar Associados
            </Button>
            <Modal
              isOpen={modaltoggleCreateAssociados}
              toggle={toggleModalCreateAssociados}
            >
              <ModalHeader toggle={toggleModalCreateAssociados}>
                Criar Associados
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={handlePermissionSubmit}>
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
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Salvar</Button>
                <Button color="secondary" onClick={toggleModalCreateAssociados}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </DivDivindoTelaHorizontal>

        <DivDivindoTelaHorizontalSpan>
          <LabelSpan>Pagamentos</LabelSpan>
        </DivDivindoTelaHorizontalSpan>
        <DivDivindoTelaHorizontal></DivDivindoTelaHorizontal>

        <DivDivindoTelaHorizontalSpan>
          <LabelSpan>Geral</LabelSpan>
        </DivDivindoTelaHorizontalSpan>
        <DivDivindoTelaHorizontal></DivDivindoTelaHorizontal>
      </DivDivindoTela>
    </Container>
  )
}
export default Admin

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await apiService('/roles')
  const roles: Roles[] = response.data
  return {
    props: { roles }
  }
}
