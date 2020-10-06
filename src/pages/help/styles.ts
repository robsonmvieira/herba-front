import styled from 'styled-components'

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;

  @media (min-width: 776px) {
    display: flex;
    justify-content: center;
  }
`

export const Wapper = styled.div`
  @media (max-width: 775px) {
    background: #1d1f2f;
    width: 100%;
  }
  @media (min-width: 776px) {
    background: #1d1f2f;
    width: 100%;
    display: flex;
  }
`

export const ContainerDivisao = styled.div`
  @media (max-width: 775px) {
    background: 1d1f2f;
    width: 100%;
  }
  @media (min-width: 776px) {
    background: 1d1f2f;
    width: 50%;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    display: flex;
    padding: 40px;
  }
`

export const Title = styled.h1`
  @media (max-width: 775px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #eff0f5;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 100%;
    font-size: 300%;
    line-height: 84px;
  }

  @media (min-width: 776px) and (max-width: 929px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 100%;
    font-size: 400%;
    line-height: 84px;
    color: #eff0f5;
    width: 350%;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 930px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 100%;
    font-size: 500%;
    line-height: 84px;
    color: #eff0f5;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export const BoxInfo = styled.section`
  @media (max-width: 775px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    align-items: center;
  }
  @media (min-width: 776px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #282741;
    justify-content: center;
    justify-items: center;
  }
`

export const BoxBrand = styled.div`
  @media (max-width: 775px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    align-items: center;
  }
  @media (min-width: 776px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: #282741;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin-top: 20px;
  }
`

export const BoxDescription = styled.h5`
  @media (max-width: 424px) {
    width: 80%;
    height: 80%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    color: #eff0f5;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 425px) and (max-width: 775px) {
    width: 80%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    color: #eff0f5;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
  @media (min-width: 776px) {
    width: 80%;
    font-family: Roboto;
    font-size: 1rem;
    color: #eff0f5;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
`

export const BoxTitle = styled.h1`
  @media (max-width: 775px) {
    width: 80%;
    color: #6e76fb;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 50px;
    font-size: 350%;
  }

  @media (min-width: 776px) and (max-width: 897px) {
    width: 80%;
    color: #6e76fb;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 52px;
  }

  @media (min-width: 898px) {
    width: 80%;
    color: #6e76fb;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    font-size: 400%;
  }
`

export const Brand = styled.h2`
  @media (max-width: 775px) {
    color: #2fc84c;
    font-weight: bold;
    width: 100%;
    font-size: 2.1rem;
    text-align: center;
  }

  @media (min-width: 776px) and (max-width: 897px) {
    color: #2fc84c;
    font-weight: bold;
    width: 60%;
    font-size: 100%;
    text-align: center;
  }

  @media (min-width: 898px) {
    color: #2fc84c;
    font-weight: bold;
    width: 60%;
    height: 100%;
    font-size: 20px;
    border: 0px !important;
    padding: none !important;
    text-align: center;
  }
`

export const SpanBrand = styled.span`
  width: 40%;
  font-family: Roboto;
  font-size: 0.9rem;
  color: #eff0f5;
  font-weight: bold;

  @media (min-width: 776px) {
    color: #eff0f5;
    font-family: Roboto;
    font-weight: bold;
    width: 50%;
    font-size: 100%;
    text-align: center;
  }
`
