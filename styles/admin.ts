import styled from 'styled-components'
import {
  Button as BButton,
  Toast as TToast,
  ToastBody as TBody,
  ToastHeader as THeader
} from 'reactstrap'

export const BtnToast = styled.button`
  color: #b2585b;
  margin-left: 200px;
  background: #c08b8e;
  border: none;
  font-size: 24px;
`

export const Toast = styled(TToast)`
  color: #9c0606;
  background: #c08b8e;
`
export const ToastBody = styled(TBody)`
  color: #9c0606;
  background: #c08b8e;
`

export const ToastHeader = styled(THeader)`
  color: #9c0606;
  background: #c08b8e;
`

export const Button = styled(BButton)`
  color: #fff;
  background: #2fc84c;
  border: none;
`

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DivDivindoTela = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivDivindoTelaHorizontalDash = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivDashs = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
`

export const DivDashsInterno = styled.div`
  width: 100%;
  height: 80%;
  padding: 20px;
  display: flex;
  background: blue;
`

export const DivDivindoTelaHorizontal = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  /* border-style: groove;
  border-color: red; */
  /* border-radius: 10px 20px 30px 40px; */
  align-items: center;
  margin-bottom: 10px;
`
export const DivDivindoTelaHorizontalSpan = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const LabelSpan = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  color: #fff;
`
