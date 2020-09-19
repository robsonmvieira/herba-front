import React from 'react'
import { ContainerFluid, Container, Title, SubTitle, Wapper } from './styles'

const Home = () => {
  return (
    <>
      <ContainerFluid>
        <Container>
          <Wapper>
            <Title>Life admin</Title>
            <SubTitle>
              Gerencie suas vendas e o estoque dos seus Produtos Herba-life de
              uma maneira prática, segura e de onde estiver.
            </SubTitle>
            <SubTitle>
              Melhore o relacionamento com seus clientes e aumente seu poder de
              conversão de vendas com dados que lhe apoiam nas decisões correta.
            </SubTitle>
          </Wapper>
        </Container>
      </ContainerFluid>
    </>
  )
}
export default Home
