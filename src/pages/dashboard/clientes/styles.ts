import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #1d1f2f;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
`

export const ContainerInclusao = styled.div`
  background: red;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
`

export const Content = styled.div`
  /* @media (max-width: 767px) {
    display: none;
    background: red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  @media (min-width: 768px) {
    display: none;
    background: #1d1f2f;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerSide = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    background: #282741;
    width: 15%;
    max-width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`

export const ContainerTudo = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
  }
`

export const ContainerIcones = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 40%;
    height: 50%;
    display: flex;
    margin: none;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: none;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const ContainerBoxes = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 60%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 85%;
    height: 40%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: center;
    justify-items: center;
  }
`

export const FormContainer = styled.div`
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 100%;
    height: 60%;
    display: flex;
    margin: none;
    padding: none;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 95%;
    height: 100%;
    display: flex;
    margin: none;
    padding: none;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }
`

export const BoxDescription = styled.div`
  @media (max-width: 767px) {
    background: #282741;
    width: 90%;
    height: 70px;
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 20%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: 45px;
    flex-direction: column;
    font-size: 1rem;
  }
`

export const Tr = styled.div`
  background: #282741;
  width: 80%;
  height: 40px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  color: #fff;
`

export const TabelaBody = styled.div`
  background: #282741;
  width: 80%;
  height: 10%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  color: #fff;
`

// export const SpanListTh = styled.span`
//   @media (max-width: 767px) {
//     background: #282741;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     justify-items: center;
//     color: #fff;
//     font-size: 1rem;
//     margin-left: 10px;
//   }

//   @media (min-width: 768px) {
//     background: #282741;
//     width: 100%;
//     text-align: center;
//     display: flex;
//     align-items: center;
//     color: #fff;
//     margin-left: 10px;
//   }
// `
// export const SpanListTd = styled.span`
//   @media (max-width: 767px) {
//     background: #282741;
//     width: 15%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     justify-items: center;
//     color: #fff;
//     font-size: 0.7rem;
//     margin-left: 10px;
//   }

//   @media (min-width: 768px) {
//     background: #282741;
//     width: 15%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     justify-items: flex-start;
//     color: #fff;
//     font-size: 0.8rem;
//     margin-left: 10px;
//   }
// `

export const Box = styled.div`
  @media (max-width: 767px) {
    width: 90%;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
`

export const Title = styled.span`
  @media (max-width: 767px) {
    color: #2fc84c;
    width: 40%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    color: #2fc84c;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
  }
`

export const TitleCustom = styled.span`
  @media (max-width: 767px) {
    color: #ef6e6e;
    width: 40%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 0.9rem;
  }
  @media (min-width: 768px) {
    color: #ef6e6e;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
  }
`

export const Description = styled.span`
  @media (max-width: 767px) {
    color: #fff;
    width: 45%;
    font-size: 0.9rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-items: center;
    font-family: Roboto;
    font-style: normal;
  }

  @media (min-width: 768px) {
    color: #fff;
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
  }
`
export const ContainerListAdicionar = styled.div`
  background: #1d1f2f;
  width: 80%;
  height: 10%;
  display: flex;
  margin-top: 50px;
  align-items: flex-end;
  justify-content: flex-end;
  justify-items: center;
  color: #fff;
`

export const ContainerAdicionar = styled.div`
  & > img {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    background: #1d1f2f;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    justify-items: center;
    margin-top: 25px;
  }

  @media (min-width: 768px) {
    background: #1d1f2f;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    justify-items: center;
    color: #fff;
    font-size: 1.1rem;
  }
`

export const BoxTitle = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    width: 100%;
  }
`

export const WhapperCustomName = styled.div`
  @media (max-width: 424px) {
    display: flex;
    justify-content: center;
    width: 60%;
    height: 100%;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 60%;
    height: 80%;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 75%;
    height: 80%;
  }
`
export const Whapper = styled.div`
  @media (max-width: 424px) {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 40%;
    height: 80%;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 40%;
    height: 80%;
  }
`

export const Th = styled.span`
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    text-align: center;
    justify-content: center;
  }
`
export const TBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-items: center;
`

export const BoxTdCustomName = styled.div`
  @media (max-width: 424px) {
    background: #282741;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
    flex-wrap: nowrap;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 40%;
    height: 100%;
    display: flex;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
`

export const Td = styled.span`
  @media (max-width: 424px) {
    background: #282741;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.8rem;
  }

  @media (min-width: 425) and(max-width: 767px) {
    background: #282741;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 100%;
    height: 80%;
    display: flex;
    color: #fff;
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 0.9rem;
  }
`

export const BoxTd = styled.div`
  @media (max-width: 424px) {
    background: #282741;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    width: 40%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
    margin-left: 5px;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 20%;
    height: 100%;
    display: flex;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap !important;
  }
`
export const DivBtnPreviusNext = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 80px;
`
export const BtnPreviosNext = styled.button`
  @media (max-width: 497px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2fc84c;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    flex-direction: center;
    width: 80%;
    height: 50px;
    padding: none;
    margin-top: 15px;
    border: none;
    color: #fff;
    outline: none !important;
  }

  @media (min-width: 498px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2fc84c;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 100%;
    line-height: 21px;
    flex-direction: row;
    width: 30%;
    height: 40px;
    border: none;
    color: #fff;
    overflow: auto;
    margin-top: 15px;
    outline: none !important;
  }
`

export const ContainerBusca = styled.div`
  @media (max-width: 497px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 90%;
  }

  @media (min-width: 498px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background: #282741;
    height: 80px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background: #282741;
    height: 80px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
export const FormList = styled.form`
  @media (max-width: 497px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: 498px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    justify-items: center;
  }
`
export const InputFormList = styled.input`
  @media (max-width: 497px) {
    width: 100%;
    height: 48px;
    background: #282741;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
    padding: 20px;
    padding-left: 5px;
    outline: none !important;
  }
  /* medium */
  @media (min-width: 498px) {
    width: 100%;
    /* max-width: 400px; */
    height: 40px;
    background: #1d1f2f;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 10px;
    padding-left: 5px;
    outline: none !important;
  }
`
export const BtnList = styled.button`
  @media (max-width: 497px) {
    width: 30%;
    margin-top: 21px;
    height: 48px;
    background: #ff6198;
    color: #eff0f5;
    border: none;
    font-size: 120%;
    margin-left: 3px;
    outline: none !important;
  }

  /* Medium */

  @media (min-width: 498px) {
    width: 30%;
    height: 40px;
    background: #ff6198;
    color: #eff0f5;
    border: none;
    font-size: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 10px;
    outline: none !important;
  }
`
