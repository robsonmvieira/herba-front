import styled from "styled-components";

export const ContainerListLarge = styled.div`
  @media (max-width: 425px) {
    display: none;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    /* display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    min-width: 450px; */
    /* width: 100%; */
    display: flex;
    margin-bottom: 250px;
    width: auto;
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
  }
  & th {
    font-family: Roboto;
    font-style: normal;
    color: #ffffff;
    border: none;
    width: 100%;
  }
  & thead {
    background-color: #1d1f2f;
    border: none;
  }
  & tr {
    color: #ffffff;
    border: none;
    width: 90%;
  }
  & td {
    color: #c4c4c4;
    border: none;
    width: 90%;
  }
  & table {
    position: relative;
    width: 90%;
  }

  @media (min-width: 769px) {
  }
`;

export const ItemContainer = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 90%;
    background-color: #282741;
    height: 500px;
    margin-top: 20px;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #282741;
  }
`;

export const ContainerHeaderList = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
