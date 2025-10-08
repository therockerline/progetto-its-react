import './App.css'
import { StateContext } from './context/stateContext'
import { Component } from './components/bundles/Component'

function App() {

  return (
    <StateContext>
      <Component />
    </StateContext>
  )
}

export default App
