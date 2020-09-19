import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  /*
  @media (min-width: 768px) and (max-width: 767px) {
    background: #282741;
    width: 25%;
    max-width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  } */
  @media (min-width: 768px) {
    background: #282741;
    width: 15%;
    max-width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerSide = styled.div`
  @media (min-width: 426px) {
    background: #282741;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 20px;
    align-items: center;
    max-width: 550px;
  }
`;
