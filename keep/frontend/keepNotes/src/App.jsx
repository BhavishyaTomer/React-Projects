import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EnteringData from './components/EnteringData'
import DisplayData from './components/DisplayData'
import KeepContextProvider from './context/KeepContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <KeepContextProvider>
     <EnteringData/>
     <DisplayData/>
     </KeepContextProvider>
    </>
  )
}

export default App
