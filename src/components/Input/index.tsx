import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Input as CInput } from './styles'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,

      ref: inputRef.current,

      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <>
      {error && (
        <Toast style={{ background: 'red' }}>
          <ToastHeader style={{ color: '#fff', background: 'red' }}>
            Erro de validação.
          </ToastHeader>
          <ToastBody style={{ color: '#fff' }}>
            Há erro em um ou mais campos - {error}
          </ToastBody>
        </Toast>
      )}
      <CInput ref={inputRef} defaultValue={defaultValue} {...rest} />
    </>
  )
}

export default Input
