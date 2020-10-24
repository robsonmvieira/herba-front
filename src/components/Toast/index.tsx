import React, { useState } from 'react'
import { Toast as RToast, ToastBody } from 'reactstrap'
import { Container, ToastHeader } from '../../../styles/toast'
interface Props {
  isOpen: boolean
  headerMessage: string
  bodyMessage: string
}

const ToastCustom = ({ headerMessage, bodyMessage, isOpen }: Props) => {
  const [show, setShow] = useState(isOpen)

  const toggle = () => setShow(!show)

  return (
    <Container>
      <RToast isOpen={show}>
        <ToastHeader>
          <span style={{ color: '#fff', marginRight: '110px' }}>
            {headerMessage}
          </span>
          <span style={{ color: '#fff', cursor: 'pointer' }} onClick={toggle}>
            X
          </span>
        </ToastHeader>
        <ToastBody>{bodyMessage}</ToastBody>
      </RToast>
    </Container>
  )
}
export default ToastCustom
