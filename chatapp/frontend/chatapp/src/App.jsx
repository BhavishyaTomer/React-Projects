import { useState, useMemo, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Button, Container, TextField, Typography } from '@mui/material';

const App = () => {
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [personalid,setPersonalid]=useState('');
  const [messagelist,setMessagelist]=useState([])

  const socket = useMemo(() => {
    const newSocket = io('http://localhost:5000');
    newSocket.on('connect', () => {
      console.log('connected', newSocket.id);
      setPersonalid(newSocket.id);
    });
    newSocket.on('recive-message', (s) => {
      console.log('message', s);
      // setMessagelist(...messagelist,s)
        setMessagelist(prevMessages => [...prevMessages, s]);
    });
    return newSocket;
  }, []);
  useEffect(() => {
    console.log('Updated message list:', messagelist);
  }, [messagelist]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', { message, room });
    setMessage('');
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>Welcome to Socket.IO</Typography>
      {personalid&&<h1>Your personalid is {personalid}</h1>}
      <form onSubmit={sendMessage}>
        <TextField
          label='Room'
          variant='outlined'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <TextField
          label='Message'
          variant='outlined'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type='submit' color='success' variant='contained'>
          Send Message
        </Button>
      </form>
      {messagelist.map((m,i)=><h1 key={i}>{m}</h1>)}
    </Container>
  );
};

export default App;
