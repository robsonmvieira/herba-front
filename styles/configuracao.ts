import styled from 'styled-components'

export const Container = styled.div`
 @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;}
  

  @media (min-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
  }
`


export const ContainerConteudo = styled.div`
  /* @media (max-width: 767px) {
    display: none;
    background: red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  
`

export const Section = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 600px;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    margin-bottom: 100px
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 90%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
    margin-top: 50px;
    margin-bottom: 100px

  }
`

export const BoxFormulario = styled.div`
 
    background: #1d1f2f;
    width: 90%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  
`


export const BoxTitulo = styled.div`
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



// a partir daqui é relacionado a desktop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const Label = styled.span`
  @media (max-width: 767px) {
    background: #1d1f2f;
    color: #ffffff;
    width: 100%;
    height: 40%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    height: 30%;
    margin-left: 5px;
    background-color: #1d1f2f;
  }
`

export const ContainerAdicionarDesktop = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
    background-color: #1d1f2f;

    flex-direction: column;
  }
`

export const BoxInputCustom = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 49%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
  }
`
export const BoxInput = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 32%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
  }
`
export const ContainerDesktopCustom = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 50%;
    background-color: #1d1f2f;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
  }
`


export const BoxAdicionarDesktopCustom = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    background-color: #1d1f2f;
    flex-direction: column;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #1d1f2f;
    flex-direction: column;
    margin-top: 20px;
  }
`



export const ContainerFormulario = styled.div`
  /* aumenta o container com a label e o input dentro  */
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-items: center;
    color: #fff;
    background-color: #1d1f2f;
    
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #1d1f2f;
    margin-top: 15px;
    margin-bottom: 5px;
    flex-direction: column;}

  
`
export const Wrapper = styled.div`
  /* aumenta o container com a label e o input dentro  */
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    flex-direction: column;
    
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #1d1f2f;
    margin-top: 15px;
    margin-bottom: 5px;
    flex-direction: row;

  }
`


export const InputDesktop = styled.input`
  @media (max-width: 767px) {
    background: #282741;
    color: #ffffff;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #282741;
    border: none;
    color: #eff0f5;
    height: 40px;
    outline: none;
    padding-left: 5px;
  }
`

export const Select = styled.select`
  @media (max-width: 767px) {
    background: #282741;
    color: #ffffff;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border: none;
    
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #282741;
    border: none;
    color: #eff0f5;
    height: 40px;
    outline: none;
    padding-left: 5px;
    

  }
`


export const BtnAdicionar = styled.button`
  @media (max-width: 767px) {
    background: #2FC84C;
    width: 100%;
    height: 35%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    outline: none !important;
  }

  @media (min-width: 768px) {
    width: 330px;
    height: 50px;
    margin-top: 50px;
    background-color:  #2FC84C;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 50px;
    outline: none !important;

  }
`


export const ContainerSide = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 300px;
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
    // height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
  }
`

// #1D1F2F  - color fundo

// #282741  -  color input
