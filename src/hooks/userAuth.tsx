import React, { createContext, useCallback } from 'react'
import apiService from '../services/apiService'
interface loginCredencials {
  email: string
  password: string
}
interface userAuthProps {
  user: string
  token: string
  login(data: loginCredencials): void
  signOut(): void
}
const UserAuthContext = createContext<userAuthProps>({} as userAuthProps)

const UserAuthProvider = ({ children }) => {
  const login = useCallback(async ({ email, password }: loginCredencials) => {
    const response = await apiService.post('sessions/login', {
      email,
      password
    })
    console.log(response)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@lifeadmin/user')
    localStorage.removeItem('@lifeadmin/token')
    console.log('log off')
  }, [])

  return (
    <UserAuthContext.Provider
      value={{ user: 'robson', token: '', login, signOut }}
    >
      {children}
    </UserAuthContext.Provider>
  )
}
export { UserAuthProvider, UserAuthContext }
