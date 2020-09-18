import styled from "styled-components";

export const ContainerListLarge = styled.div`
  @media (max-width: 425px) {
    display: none;
  }

  @media (min-width: 426px) {
    /* display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    min-width: 450px; */
    /* width: 100%; */
    display: flex;
    margin-bottom: 250px;
    width: 100%;
    position: relative;
    overflow-x: 100%;
    border: none;
  }
  & th {
    font-family: Roboto;
    font-style: normal;
    color: #ffffff;
    border: none;
  }
  & thead {
    background-color: #1d1f2f;
    border: none;
  }
  & tr {
    color: #ffffff;
    border: none;
  }
  & td {
    color: #c4c4c4;
    border: none;
    padding: none;
  }
  & table {
    position: relative;
    padding: none;
    margin: none;
    border: none;
  }
  & tbody {
    border: none;
  }
`;

// container que segura a tabela abaixo

export const ItemContainer = styled.div`
  @media (max-width: 497px) {
    display: none;
  }
  @media (min-width: 498px) and (max-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #282741;
    margin-top: 20px;
  }

  @media (min-width: 761px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #282741;
  }
`;

// export const ContainerHeaderList = styled.div`
//   background-color: red;
//   width: 500%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
