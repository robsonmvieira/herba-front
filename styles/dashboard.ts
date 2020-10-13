import styled from 'styled-components'

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ContainerGrid = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`
export const Grid = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerSide = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
`
export const IconsTags = styled.div`
  background: #282741;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  justify-items: center;
`

export const BoxCustom = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivImg = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
`

export const BoxSpan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: flex-end;
  cursor: pointer;
  :hover {
    background-color: #2fc84c;
    font-weight: bolder;
    overflow: hidden;
    width: 100%;
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  }
`
