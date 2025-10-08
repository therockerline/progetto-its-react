import { useState, createContext, type ReactNode } from 'react'

export const Ctx = createContext({
  state: false
})

export function StateContext({ children }: { children: ReactNode }) {
  const [state2, setState2] = useState(false)

  return <Ctx.Provider value={{ state: state2 }}>
    {children}
  </Ctx.Provider>
}




