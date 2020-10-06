import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 1080px;
    display: flex;
  }
`

export const ContainerInclusao = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
`

export const ContainerConteudo = styled.div`
  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ContainerSide = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    background: #282741;
    width: 15%;
    max-width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
  }
`

export const ContainerIconsLg = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 60%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 70%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
  }
`

export const ContainerNovoProduto = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 110%;
    display: flex;
    margin: none;
    padding: none;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }
`

export const IconsTags = styled.div`
  @media (max-width: 767px) {
    background: #282741;
    width: 90%;
    height: 70px;
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 20%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
    flex-direction: column;
  }
`

export const ContainerTags = styled.div`
  @media (max-width: 767px) {
    width: 90%;
    height: 80%;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    /* margin-bottom: 50px; */
  }
  @media (min-width: 768px) {
    width: 90%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    background-color: #1d1f2f;
  }
`

export const LabelProdutoDashboard = styled.span`
  @media (max-width: 767px) {
    color: #2fc84c;

    font-family: Roboto;
    font-style: normal;
    font-size: 0.9rem;
    padding: 5px;
  }

  @media (min-width: 768px) {
    color: #2fc84c;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
    padding: 5px;
  }
`

export const LabelProdutoDashboardMenos = styled.span`
  @media (max-width: 767px) {
    color: #ef6e6e;
    width: max-content;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 1rem;
    padding: 5px;
  }
  @media (min-width: 768px) {
    color: #ef6e6e;
    text-align: center;
    font-family: Roboto;
    font-style: normal;

    padding: 5px;
  }
`

export const LabelDescricaoDashboard = styled.span`
  @media (max-width: 767px) {
    color: #fff;
    width: 100%;
    font-size: 0.9rem;
    height: 40%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
  }

  @media (min-width: 768px) {
    color: #fff;
    font-family: Roboto;
    font-style: normal;
    text-align: center;
  }
`

export const ContainerSpan = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    width: 100%;
  }
`

export const ContainerListAdicionar = styled.div`
  /* aumenta o container com a label e o input dentro  */
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    flex-direction: column;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    flex-direction: column;
  }
`

export const ContainerListAdicionarComDivisao = styled.div`
  /* controla o container com 2 inputs e 2 labels  */
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const Containeradicionar = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 70px;
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    justify-items: flex-start;
    color: #fff;
    font-size: 1.1rem;
    flex-direction: column;
    margin-bottom: 15px;
  }
`
export const ContainerAdicionarComDivisao = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    justify-items: center;
    color: #fff;
    font-size: 1rem;
    flex-direction: column;
  }
`

export const ContainerTituloNovoProduto = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
    color: #fff;
    font-size: 1.1rem;
    margin-top: 2px;
  }
`

export const Input = styled.input`
  background: #282741;
  color: #fff;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  border: none;
  padding-left: 5px;
  & :focus {
    outline: none;
  }
`

export const LabelInput = styled.span`
  background: #1d1f2f;
  color: #fff;
  width: max-content;
  height: 40%;
  padding: 5px;
`

export const InputComDivisao = styled.input`
  background: #282741;
  color: #fff;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  border: none;
  outline: none;
  padding-left: 5px;
`

export const LabelInputComDivisao = styled.span`
  @media (max-width: 767px) {
    background: #1d1f2f;
    color: #fff;
    width: max-content;
    height: 40%;
    padding: 5px;
  }

  @media (min-widht: 768px) {
    background: #282741;
    color: #fff;
    width: 100%;
    text-align: start;
  }
`

export const Titulo = styled.h6`
  background: #1d1f2f;
  color: #fff;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  border: none;
  padding: none;
`

export const ContainerListAdicionarSemDivisao = styled.div`
  /* controla o container com 2 inputs e 2 labels  */
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 15px;

    /* display: none; */
  }
`

export const ContainerAdicionarSemDivisao = styled.div`
  /* controla o container com 2 inputs e 2 labels  */
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 25%;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    flex-direction: column;
  }
`

export const ContainerIconsDeCima = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 60%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 20%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
  }
`

// 74F471

export const BtnAdicionar = styled.button`
  @media (max-width: 767px) {
    background: #74f471;
    width: 100%;
    height: 80%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    background: #74f471;
    width: 40%;
    height: 50%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-top: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
`

// #1D1F2F  - color fundo

// #282741  -  color input
