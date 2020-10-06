import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Input as CInput } from './styles'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const { clearError } = useField(name)
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
        <Toast
          style={{
            background: '#C08B8E',
            width: '90%',
            flexBasis: '80%',
            maxWidth: '80%'
          }}
        >
          <ToastHeader style={{ color: '#9C0606', background: '#C08B8E' }}>
            Erro de validação.
          </ToastHeader>
          <ToastBody
            style={{ color: '#9C0606', background: '#C08B8E', height: '60px' }}
          >
            Há erro em um ou mais campos - {error}
          </ToastBody>
        </Toast>
      )}
      <CInput
        ref={inputRef}
        onFocus={clearError}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  )
}

export default Input
