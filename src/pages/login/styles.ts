import styled from 'styled-components'

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 1000px;

  @media (min-width: 776px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1000px;
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
    flex-direction: row;
  }
`

export const Side = styled.div`
  @media (max-width: 775px) {
    background: 1d1f2f;
    width: 100%;
    margin-top: 0px;
    display: flex;
    justify-content: 'center';
    align-items: 'center';
    flex-direction: column;
  }
  @media (min-width: 776px) {
    background: 1d1f2f;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    display: flex;
    padding: 0px;
    justify-content: 'flex-start';
    align-items: 'flex-start';
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
    font-size: 400%;
    line-height: 84px;
  }

  @media (min-width: 776px) and (max-width: 929px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 100%;
    font-size: 400%;
    line-height: 84px;
    color: #eff0f5;
    /* width: 350%; */
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

export const FormLogin = styled.form`
  @media (max-width: 775px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  @media (min-width: 776px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #282741;
  }
`
export const LabelLogin = styled.label`
  @media (max-width: 775px) {
    width: 80%;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    /* font-size: 120%; */
    line-height: 16px;
    color: #eff0f5;
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }
  /* medium */
  @media (min-width: 776px) {
    width: 80%;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 16px;
    color: #eff0f5;
  }
`

export const FormTitle = styled.h2`
  @media (max-width: 775px) {
    display: none;
  }

  @media (min-width: 776px) {
    width: 80%;
    height: 48px;
    color: #eff0f5;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 65px;
    margin-bottom: 80px;
    font-size: 450%;
  }
`

export const InputFormLogin = styled.input`
  @media (max-width: 775px) {
    width: 80%;
    height: 48px;
    /* left: 43px; */
    /* top: 252px; */
    background: #282741;
    color: #eff0f5;
    border: none;
  }
  /* medium */
  @media (min-width: 776px) {
    width: 80%;
    height: 48px;
    background: #1d1f2f;
    color: #eff0f5;
    border: none;
    display: flex;
    align-items: center;
  }
  /* large */
`

export const BtnLogin = styled.button`
  @media (max-width: 775px) {
    width: 80%;
    margin-top: 43px;
    height: 48px;
    background: #2fc84c;
    color: #eff0f5;
    border: none;
    font-size: 18px;
    outline: none !important;
  }

  /* Medium */

  @media (min-width: 776px) {
    width: 80%;
    margin-top: 43px;
    height: 48px;
    /* left: 43px;
    top: 252px; */
    background: #2fc84c;
    color: #eff0f5;
    border: none;
    font-size: 100%;
    outline: none !important;
  }

  /* large  */

  /* @media (min-width: 761px) {
    width: 100%;
    max-width: 500px;
    margin-top: 28px;
    height: 45px;
    background: #6e76fb;
    color: #eff0f5;
    border: none;
    font-size: 120%; */
`

// abaixo é a partir de tela com 361 px

export const ContainerLife = styled.div`
  @media (max-width: 775px) {
    margin-top: 80px;
  }
  /* medium */
  @media (min-width: 776px) {
    margin-top: 215px;
  }
  /* large */
`
export const ContainerToast = styled.div`
  @media (max-width: 775px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  /* medium */
  @media (min-width: 776px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  /* large */
`

export const BtnToast = styled.button`
  color: #b2585b;
  margin-left: 200px;
  background: #c08b8e;
  border: none;
  font-size: 24px;
`
