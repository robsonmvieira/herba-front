import React from 'react'
import {
  Container,
  BoxDescription,
  BoxInfo,
  Brand,
  ContainerDivisao,
  Title,
  Wapper,
  BoxTitle,
  BoxBrand,
  SpanBrand
} from './styles'
import Menu from '../../components/Menu'

const Help = () => {
  return (
    <>
      <Menu />

      <Container>
        <Wapper>
          <ContainerDivisao>
            <Title> Life Admin</Title>
          </ContainerDivisao>

          <ContainerDivisao>
            <BoxInfo>
              <BoxTitle>Help Desk</BoxTitle>
              <BoxDescription>
                Se Você precisa de ajuda ou recebeu algum erro ao tentar
                realizar uma operação no sistema ou precisa de alguma informação
                adicional. Por favor entre em contato com o email:
                lifeadmin@contato.com informando seu elogio/solicitação /duvida
                /sugestão/ reclamação.
              </BoxDescription>
              <BoxBrand>
                <SpanBrand>Produzido pela:</SpanBrand>
                <Brand> Twoth Tecnologia.</Brand>
              </BoxBrand>
            </BoxInfo>
          </ContainerDivisao>
        </Wapper>
      </Container>
    </>
  )
}
export default Help
