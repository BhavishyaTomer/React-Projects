import { useState } from 'react'
import React, { useEffect } from 'react'
import {io} from 'socket.io-client'
import {Button, Container, TextField, Typography} from '@mui/material'


const App = () => {
  const [message, setMessage]=useState('')
  useEffect(()=>{ 
    socket.on('connect',()=>{
      console.log('connected',socket.id)
    })
     socket.on('message',(s)=>{
      console.log('message',s)
    
    })
    return ()=>socket.disconnect()
  },[])
  const socket=io('http://localhost:5000')

  const sendMessage=(e)=>{
      e.preventDefault()
      socket.emit('message',message)
  }
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>
        Welcome to Socket.IO
      </Typography>
      <form onSubmit={sendMessage}>
        <TextField label='Message' variant='outlined' value={message}  onChange={(e) => setMessage(e.target.value)} />
        <Button type='submit' color='success' variant='contained'>send Message</Button>
      </form>
    </Container>
  )
}

export default App