import { useContext } from "react"
import { Ctx } from "../../context/stateContext"


export function InnerComponent() {
  const ctx = useContext(Ctx)
  return <div>{ctx.state.toString()}</div>
}