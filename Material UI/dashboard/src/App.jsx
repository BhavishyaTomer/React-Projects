import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Header from './component/Header';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxWidth="lg"><Header/></Container>
    </>
  )
}

export default App
