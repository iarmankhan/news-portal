import {createContext, ReactNode, useState} from "react";

export interface User {
  id: string
  name: string
  email: string
}

export interface AuthContext {
  isAuthenticated: boolean
  setUser: (user: User) => void
  user: User | null
}

export const AuthContext = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

