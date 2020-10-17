import styled from 'styled-components'
import { ToastHeader as TH } from 'reactstrap'

export const Container = styled.div`
  top: 218px;
  right: 750px;
  position: absolute;
  background: #38d376;
`
export const ToastHeader = styled(TH)`
  background: #53e79d;
  width: 100%;

  display: flex;
  justify-content: space-between;

  & > .message {
    color: #fff;
  }
`
