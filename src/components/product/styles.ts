import styled from "styled-components";

export const ItemContainer = styled.div`
  @media (max-width: 360px) {
    display: flex;
    align-items: flex-end;
    padding: 15px;
  }
  @media (min-width: 361px) and (max-width: 760px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    margin-left: 15px;
  }

  @media (min-width: 761px) {
    display: flex;
    align-items: flex-end;
    padding: 15px;
    justify-content: center;
  }
`;

export const ContainerItemInfo = styled.div`
  @media (max-width: 360px) {
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

  @media (min-width: 361px) and (max-width: 760px) {
    background: #282741;
    width: 70%;
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
      margin-left: 10px;
    }
  }

  @media (min-width: 761px) {
    background: #282741;
    width: 40%;
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
`;

export const ContainerIconsInfo = styled.div`
  @media (max-width: 360px) {
    background: #282741;
    width: 40%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (min-width: 361px) and (max-width: 760px) {
    background: #282741;
    width: 30%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media (min-width: 761px) {
    background: #282741;
    width: 25%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const InputIconInfo = styled.input`
  @media (max-width: 360px) {
    width: 35%;
    height: 30px;
    background: #fff;
    color: black;
    border: none;
    margin-top: 30px;
    margin-right: 5px;
  }

  @media (min-width: 361px) and (max-width: 760px) {
    width: 35%;
    height: 30px;
    background: #fff;
    color: black;
    border: none;
    margin-top: 30px;
    margin-right: 5px;
  }

  @media (min-width: 761px) {
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
  @media (max-width: 360px) {
    width: 50%;
    height: 35px;
    background: #74f471;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
  }

  @media (min-width: 361px) and (max-width: 760px) {
    width: 40%;
    height: 35px;
    background: #74f471;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
  }

  @media (min-width: 761px) {
    width: 20%;
    height: 35px;
    background: #74f471;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
  }
`;
