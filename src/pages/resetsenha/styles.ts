import styled from "styled-components";

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;

  @media (min-width: 776px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContainerTela = styled.div`
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
`;

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
`;

export const LabelLifeAdmin = styled.h1`
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
`;

export const FormReset = styled.form`
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
  }
`;
export const LabelEmail = styled.label`
  @media (max-width: 775px) {
    width: 80%;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 120%;
    line-height: 16px;
    color: #eff0f5;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  /* medium */
  @media (min-width: 776px) {
    width: 80%;
    max-width: 400px;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 16px;
    color: #eff0f5;
  }
`;

export const LabelResetar = styled.h2`
  @media (max-width: 775px) {
    color: #eff0f5;
  }

  @media (min-width: 776px) {
    width: 100%;
    height: 48px;
    color: #eff0f5;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 20px;
    font-size: 300%;
  }
`;

export const InputFormReset = styled.input`
  @media (max-width: 775px) {
    width: 80%;
    height: 48px;
    left: 43px;
    top: 252px;
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
`;

export const BtnEnviar = styled.button`
  @media (max-width: 775px) {
    width: 80%;
    margin-top: 43px;
    height: 48px;
    background: #2fc84c;
    color: #eff0f5;
    border: none;
    font-size: 120%;
  }

  /* Medium */

  @media (min-width: 776px) {
    width: 80%;
    margin-top: 43px;
    height: 48px;
    left: 43px;
    top: 252px;
    background: #2fc84c;
    color: #eff0f5;
    border: none;
    font-size: 100%;
  }
`;
