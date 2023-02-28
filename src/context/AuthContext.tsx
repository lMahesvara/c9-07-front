import { ReactNode, createContext, useContext, useState } from 'react'

type AuthContextProps = {
  user: string
  token: string
  isAuthenticated: () => Promise<boolean>
  setAuth: (user: string, token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  user: '',
  token: '',
  isAuthenticated: () => Promise.resolve(false),
  setAuth: () => null,
  logout: () => null,
})

export function useAuth() {
  return useContext(AuthContext)
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string>('')
  const [token, setToken] = useState<string>('')

  const isAuthenticated = async (): Promise<boolean> => {
    const token = localStorage.getItem('token')

    if (!token) return false

    const URL = process.env.API_URL + '/validacion'

    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()

      if (data.error) {
        return false
      }

      setAuth(data.msg.username, token)
      return true
    } catch (error) {
      return false
    }
  }

  const setAuth = (username: string, token: string) => {
    localStorage.setItem('token', token)

    setUser(username)
    setToken(token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser('')
    setToken('')
  }

  const value = {
    user,
    token,
    isAuthenticated,
    setAuth,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
