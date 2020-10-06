import React, { useCallback } from 'react'

import { Container } from '../../../styles/admin'

const Admin = () => {
  const populateDatabase = useCallback(() => {
    console.log('loguei')
  }, [])
  return (
    <Container>
      <h1>Admin </h1>
      <button onClick={populateDatabase}>cadastrar</button>
    </Container>
  )
}
export default Admin
