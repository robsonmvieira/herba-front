import styled from 'styled-components'


export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
`

export const ContainerVenda = styled.div`
  /* @media (max-width: 760px) {
    
    width: 100%;
  } */
  /* @media (min-width: 761px) { */
    display: flex;
    width: 95%;
    height: 80%;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  /* } */
`
export const ContainerVendido = styled.div`
/* position: absolute;
border-width: 100px;
border-style: solid;
border-color: #2FC84C;
background: #f2f; */

width: clamp(20rem, 50%, 60% );
height: clamp(20rem, 90%, 100% );
background: #1d1f2f;
color: #FFF;
padding: 20px;
border: 25px solid #2FC84C;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
`

export const Imagem = styled.img`
width: clamp(15rem, 50%, 60% );


`