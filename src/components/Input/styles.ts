import styled from 'styled-components'

// export const Input = styled.input`
//   background: #282741;
//   @media (max-width: 775px) {
//     width: 80%;
//     height: 48px;
//     background: #282741;
//     color: #eff0f5;
//     border: none;
//   }
//   /* medium */
//   @media (min-width: 776px) {
//     width: 80%;
//     height: 48px;
//     background: #1d1f2f;
//     color: #eff0f5;
//     border: none;
//     display: flex;
//     align-items: center;
//   }
//   /* large */
// `

export const Input = styled.input`
  @media (max-width: 767px) {
    background: #282741;
    color: #ffffff;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #282741;
    border: none;
    color: #eff0f5;
    height: 40px;
    outline: none;
    padding-left: 5px;
  }
`
