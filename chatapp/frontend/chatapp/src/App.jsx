import { useState } from 'react'
import React, { useEffect } from 'react'
import {io} from 'socket.io-client'
import {Button, Container, TextField, Typography} from '@mui/material'
import { useMemo } from 'react'


const App = () => {
  const [message, setMessage]=useState('')
  const [room,setRoom]=useState('')
  useEffect(()=>{ 
    socket.on('connect',()=>{
      console.log('connected',socket.id)
    })
     socket.on('message',(s)=>{
      console.log('message',s)
    
    })
    return ()=>socket.disconnect()
  },[])
  const socket=useMemo(()=>{
    io('http://localhost:5000')
  },[])

  const sendMessage=(e)=>{
      e.preventDefault()
      socket.emit('message',{message,room})
      setMessage("")
  }
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>
        Welcome to Socket.IO
      </Typography>
      <Typography variant='h3'>
        {socket& socket.id}
      </Typography>
      <form onSubmit={sendMessage}>
      <TextField label='Room' variant='outlined' value={room}  onChange={(e) => setRoom(e.target.value)} />
        <TextField label='Message' variant='outlined' value={message}  onChange={(e) => setMessage(e.target.value)} />
        <Button type='submit' color='success' variant='contained'>send Message</Button>
      </form>
    </Container>
  )
}

export default App