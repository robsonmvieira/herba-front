import styled from "styled-components";

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContainerIcones = styled.div`
  @media (max-width: 669px) {
    background: #1d1f2f;
    width: 50%;
    height: 50%;
    display: flex;
    margin: none;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: none;
    flex-direction: column;
  }

  @media (min-width: 670px) {
    display: none;
  }
`;

export const ContainerIconesLg = styled.div`
  @media (max-width: 669px) {
    display: none;
  }

  @media (min-width: 670px) {
    background: #1d1f2f;
    width: 100%;
    height: 40%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
  }
`;

export const IconsTags = styled.div`
  @media (max-width: 669px) {
    background: #282741;
    width: 139px;
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

  @media (min-width: 520px) and (max-width: 669px) {
    background: #282741;
    width: 50%;
    height: 60%;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
  }

  @media (min-width: 670px) {
    background: #282741;
    width: 20%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
    margin-left: 20px;
    flex-direction: column;
  }
`;

export const LabelProdutoDashboard = styled.span`
  @media (min-width: 601px) and (max-width: 879px) {
    color: #2fc84c;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
  }
`;

export const LabelProdutoDashboardMenos = styled.span`
  @media (min-width: 601px) and (max-width: 879px) {
    color: #ef6e6e;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
  }
`;

export const LabelDescricaoDashboard = styled.span`
  @media (min-width: 670px) and (max-width: 879px) {
    color: #fff;
    width: 100%;
    font-size: 80%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
  }
`;
