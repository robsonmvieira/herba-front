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

/* @media (min-width: 361px) and (max-width: 760px) {
    background: red;
  } */

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

export const FormLogin = styled.form`
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
  /* @media (min-width: 761px) {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    align-items: center;
  } */
`;
export const LabelSobre = styled.p`
  @media (max-width: 424px) {
    width: 70%;
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
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    color: #eff0f5;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  /* medium */
  @media (min-width: 776px) {
    width: 80%;
    height: 50%;
    font-family: Roboto;
    font-size: 0.9rem;
    color: #eff0f5;
  }

  /* large */
  /* @media (min-width: 761px) {
    width: 100%;
    max-width: 500px;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 16px;
    color: #eff0f5;
  } */
`;

export const LabelHelpDeskH1 = styled.h1`
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
    height: 50%;
    color: #6e76fb;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 300%;
  }

  @media (min-width: 898px) {
    width: 80%;
    height: 50%;
    color: #6e76fb;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 400%;
  }
`;

export const InputFormLogin = styled.input`
  @media (max-width: 775px) {
    width: 80%;
    height: 48px;
    left: 43px;
    top: 252px;
    background: #282741;
    color: #6e76fb;
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

  /* @media (min-width: 761px) {
    width: 80%;
    max-width: 500px;
    height: 40px;
    left: 20px;
    top: 252px;
    background: #282741;
    color: #eff0f5;
    border: none;
    */
`;

export const BtnLogin = styled.button`
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
    max-width: 400px;
    margin-top: 43px;
    height: 48px;
    left: 43px;
    top: 252px;
    background: #2fc84c;
    color: #eff0f5;
    border: none;
    font-size: 100%;
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
`;

// abaixo é a partir de tela com 361 px

export const LabelMarca = styled.span`
  color: #2fc84c;
  margin-left: 10px;
  font-weight: bold;
`;
