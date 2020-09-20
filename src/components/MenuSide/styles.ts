import styled from 'styled-components'

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const ContainerTudo = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
  }
`

export const ContainerIcones = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 40%;
    height: 50%;
    display: flex;
    margin: none;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: none;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const ContainerIconesLg = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 40%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
  }
`

export const ContainerListaLg = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    height: 60%;
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
    width: 80%;
    height: 98px;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 20%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
    flex-direction: column;
    font-size: 1rem;
  }
`

export const ContainerList = styled.div`
  @media (min-width: 768px) {
    background: #282741;
    width: 90%;
    height: 10%;
    display: flex;
    margin-top: 10px;
    align-items: flex-start;
    justify-content: space-between;
    justify-items: center;
    color: #fff;
  }
`
export const SpanListTh = styled.span`
  @media (min-width: 768px) {
    background: #282741;
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 1.1rem;
  }
`
export const SpanListTd = styled.span`
  @media (min-width: 768px) {
    background: #282741;
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
  }
`

export const ContainerTags = styled.div`
  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
`

export const LabelProdutoDashboard = styled.span`
  @media (min-width: 768px) {
    color: #2fc84c;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
  }
`

export const LabelProdutoDashboardMenos = styled.span`
  @media (min-width: 768px) {
    color: #ef6e6e;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
  }
`

export const LabelDescricaoDashboard = styled.span`
  @media (min-width: 768px) {
    color: #fff;
    width: 100%;
    font-size: 0.9rem;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
  }
`
