import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react';
import Cookies from 'universal-cookie'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { blue, red } from '@mui/material/colors';



const cookies = new Cookies();
const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [credentials,setCredentials]=useState(false)
  const maxAgeInSeconds = 24 * 60 * 60; // 1 day in seconds
  const userRef=useRef()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
    axios.post(`${baseUrl}/login`, {
      email: email,
      password: password,
    })
      .then(function (response) {
       
        const token = response.data.Ticket;
        console.log("response",token)
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + maxAgeInSeconds * 1000);
        cookies.set("JWT",token,{
          expires:expirationDate
        })
      setCredentials(false)
      })
      .catch(function (error) {
        console.log("error",error);
      setCredentials(true)
      })
  };
  useEffect(() => {
    userRef.current.focus();
  }, []);
  return (
   <Container component="div" maxWidth={'lg'} sx={{display:"flex",justifyContent:"center"}}>
    <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:"50%"
          }}>
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Typography component="label" sx={{marginRight:'1rem'}}>User Name</Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'40%',margin:'1rem'}} inputRef={userRef} value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Typography component="label">Password</Typography>
          <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width:'40%',margin:'1rem'}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
          {credentials &&
          <Typography component="span" sx={{color:"red"}}>Invalid Credentials</Typography>
          }
    </Box>


   </Container>
  )
}

export default Login
