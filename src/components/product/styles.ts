import styled from "styled-components";

export const ItemContainer = styled.div`
  @media (max-width: 425px) {
    display: flex;
    align-items: flex-end;
    margin-top: 15px;
    width: 90%;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerItemInfo = styled.div`
  @media (max-width: 425px) {
    background: #282741;
    width: 60%;
    height: 70px;
    display: flex;
    flex-direction: column;
    color: #eff0f5;
    justify-content: flex-end;
    & h6 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-left: 10px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    /* background: #282741;
    width: 60%;
    height: 70px;
    display: flex;
    flex-direction: column;
    color: #eff0f5;
    justify-content: flex-end;
    max-width: 540px;
    & h6 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-left: 10px;
    }
    & Span {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-left: 10px; */

    display: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ContainerIconsInfo = styled.div`
  @media (max-width: 425px) {
    background: #282741;
    width: 40%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    /* background: #282741;
    width: 40%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end; */
    display: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const InputIconInfo = styled.input`
  @media (max-width: 425px) {
    width: 35%;
    height: 30px;
    background: #fff;
    color: black;
    border: none;
    margin-top: 30px;
    margin-right: 5px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 35%;
    height: 30px;
    background: #fff;
    color: black;
    border: none;
    margin-top: 30px;
    margin-right: 5px;
  }

  @media (min-width: 769px) {
    width: 17%;
    height: 30px;
    background: #fff;
    color: black;
    border: none;
    margin-top: 30px;
    margin-right: 5px;
  }
`;

export const ContainerBtn = styled.button`
  @media (max-width: 425px) {
    width: 50%;
    height: 35px;
    background: #74f471;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    border: none;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 40%;
    height: 35px;
    background: #74f471;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    border: none;
  }

  @media (min-width: 769px) {
    width: 20%;
    height: 35px;
    background: #74f471;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    border: none;
  }
`;
