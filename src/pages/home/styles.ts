import styled from 'styled-components'

export const ContainerFluid = styled.section`
  background: url('/image/home.png');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Wapper = styled.div`
  width: 90%;
  height: 80vh;
  margin-top: 100px;
`

export const Title = styled.h1`
  @media (max-width: 589px) {
    font-family: Roboto;
    font-style: normal;
    font-size: 350%;
    color: #ffffff;
    width: 100%;
    /* height: 25%; */
    align-items: flex-start;
    display: flex;
    justify-content: start;
    /* background: rgba(0, 8, 80, 0.35); */
    padding: none;
    margin-bottom: 0px;
  }
  @media (min-width: 590px) and (max-width: 754px) {
    font-family: Roboto;
    font-style: normal;
    font-size: 350%;
    color: #ffffff;
    width: 100%;
    align-items: flex-start;
    display: flex;
    justify-content: start;
    padding: none;
    margin-bottom: 0px;
  }
  @media (min-width: 755px) {
    font-family: Roboto;
    font-style: normal;
    font-size: 72px;
    color: #ffffff;
    width: 100%;
    align-items: flex-start;
    display: flex;
    justify-content: start;
    padding: none;
    margin-bottom: 0px;
  }
`

export const SubTitle = styled.h2`
  @media (max-width: 668px) {
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
    color: #ffffff;
    width: 70%;
    /* height: 23%; */
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    padding: none;
  }

  @media (min-width: 669px) {
    font-family: Roboto;
    font-style: normal;
    font-size: 100%;
    color: #ffffff;
    width: 50%;
    height: 15%;
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    padding: none;
  }
`

// export const ContainerDivisao = styled.div`
//   @media (max-width: 775px) {
//     background: 1d1f2f;
//     width: 100%;
//   }
//   @media (min-width: 776px) {
//     background: 1d1f2f;
//     width: 50%;
//     display: flex;
//     flex-direction: row;
//     display: flex;
//     padding: 40px;
//   }
// `;

// export const FormHelp = styled.form`
//   @media (max-width: 775px) {
//     display: flex;
//     flex-direction: column;
//     margin-top: 25px;

//     align-items: center;
//   }
//   @media (min-width: 776px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     background-color: #282741;
//   }
// `;
// export const LabelHelpDesk = styled.p`
//   @media (max-width: 424px) {
//     width: 70%;
//     height: 80%;
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 1.1rem;
//     color: #eff0f5;
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//   }

//   @media (min-width: 425px) and (max-width: 775px) {
//     width: 80%;
//     height: 100%;
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 1.1rem;
//     color: #eff0f5;
//     align-items: center;
//     display: flex;
//     justify-content: center;
//   }
//   @media (min-width: 776px) {
//     width: 80%;
//     height: 50%;
//     font-family: Roboto;
//     font-size: 0.9rem;
//     color: #eff0f5;
//   }
// `;

// export const LabelHelpDeskH1 = styled.h1`
//   @media (max-width: 775px) {
//     width: 80%;
//     color: #6e76fb;
//     border: none;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;
//     margin-bottom: 50px;
//     font-size: 350%;
//   }

//   @media (min-width: 776px) and (max-width: 897px) {
//     width: 80%;
//     height: 50%;
//     color: #6e76fb;
//     border: none;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;
//     margin-top: 50px;
//     margin-bottom: 20px;
//     font-size: 300%;
//   }

//   @media (min-width: 898px) {
//     width: 80%;
//     height: 50%;
//     color: #6e76fb;
//     border: none;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;
//     margin-top: 50px;
//     margin-bottom: 20px;
//     font-size: 400%;
//   }
// `;

// export const LabelMarca = styled.span`
//   color: #2fc84c;
//   margin-left: 10px;
//   font-weight: bold;
// `;
