import styled from 'styled-components'


export const Content = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  justify-items: center;
  align-items: center;
    
`

export const ContainerImage = styled.div`
  
    display: flex;
    width: 95%;
    height: 80%;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    
  
`
export const BoxImage = styled.div`
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
/* border: 25px solid #2FC84C; */
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
justify-items: center;
flex-direction:column;
`

export const Imagem = styled.img`
width: 60%;
height: auto;
margin-bottom:20px;


/* :hover {
      font-weight: bolder;
      overflow: hidden;
      width: 80%;
      border-radius: 2px;
      -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
     
    } */

`

export const BoxLink = styled.a`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: #fff;
cursor: pointer;
font-size: 20px;
`