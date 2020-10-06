import React, { useState, useCallback } from 'react'

import { Container } from '../../../styles/admin'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Input from '../../components/Input'
import { Form } from '@unform/web'

const Admin = () => {
  // const populateDatabase = useCallback(() => {
  //   console.log('loguei')
  // }, [])

  const [modalToogleCreateRoles, setModalToogleCreateRoles] = useState(false)
  const [modalToogleCreatePositions, setModalToogleCreatePositions] = useState(
    false
  )
  const [modalToogleListRoles, setModalToogleListRoles] = useState(false)
  const [modalToogleListPositions, setModalToogleListPositions] = useState(
    false
  )

  const toogleModalListPositions = () =>
    setModalToogleListPositions(!modalToogleListPositions)

  const toogleModalCreatePositions = () =>
    setModalToogleCreatePositions(!modalToogleCreatePositions)

  const toogleModalListRoles = () =>
    setModalToogleListRoles(!modalToogleListRoles)

  const toggleModalCreateRoles = () =>
    setModalToogleCreateRoles(!modalToogleCreateRoles)

  const handleSubmit = useCallback(() => {
    console.log('log')
  }, [])
  return (
    <Container>
      <div>
        <Button color="danger" onClick={toggleModalCreateRoles}>
          Nova Posição
        </Button>
        <Modal isOpen={modalToogleCreateRoles} toggle={toggleModalCreateRoles}>
          <ModalHeader toggle={toggleModalCreateRoles}>
            Nova Posição
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <label>Name</label>
              <Input name="Name"></Input>
              <label>Description</label>
              <Input name="Description"></Input>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModalCreateRoles}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={toggleModalCreateRoles}>
              Canecelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* proxima modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Button color="danger" onClick={toogleModalCreatePositions}>
          Nova Permissão
        </Button>
        <Modal
          isOpen={modalToogleCreatePositions}
          toggle={toogleModalCreatePositions}
        >
          <ModalHeader toggle={toogleModalCreatePositions}>
            Nova Permissão
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <label>Name</label>
              <Input name="Name"></Input>
              <label>Description</label>
              <Input name="Description"></Input>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toogleModalCreatePositions}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={toogleModalCreatePositions}>
              Canecelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* proxima modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Button color="danger" onClick={toogleModalListRoles}>
          Listar Posições
        </Button>
        <Modal isOpen={modalToogleListRoles} toggle={toogleModalListRoles}>
          <ModalHeader toggle={toogleModalListRoles}>
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
            <Button color="primary" onClick={toogleModalListRoles}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={toogleModalListRoles}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* proxima modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Button color="danger" onClick={toogleModalListPositions}>
          Listar Permissões
        </Button>
        <Modal
          isOpen={modalToogleListPositions}
          toggle={toogleModalListPositions}
        >
          <ModalHeader toggle={toogleModalListPositions}>
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
            <Button color="primary" onClick={toogleModalListPositions}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={toogleModalListPositions}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
  )
}
export default Admin
