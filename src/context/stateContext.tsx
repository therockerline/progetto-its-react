import { useState, createContext, useContext, type ReactNode } from 'react'

export const Ctx = createContext({
  state: false
})

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [state2, setState2] = useState(false)

  return <Ctx.Provider value={{ state: state2 }}>
    {children}
  </Ctx.Provider>
}




