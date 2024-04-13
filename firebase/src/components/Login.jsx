import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase-config';

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSignIn=async(e)=>{
        e.preventDefault();
        console.log("hitting registration")
        try {
            await signInWithEmailAndPassword(firebaseAuth,email,password)
        } catch (error) {
            console.log("erros is",error)
        }

    }
    onAuthStateChanged(firebaseAuth,(user)=>{
        if(user) {
            navigate("/user")
            console.log(user);
        }
    })
  return (
    
      <Stack
        direction="column"
        spacing={2}
        sx={{ '& > :not(style)': { width: '25ch' } }}
      >
        <TextField id="email" label="Email" variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextField id="password" label="Password" variant="filled" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button variant="contained" color="success" onClick={(e)=>handleSignIn(e)}>
        Login
      </Button>
      <span><Link to={"/signup"}>Don't have an account?
        </Link>
      </span>
      </Stack>

   
    
  );
};

export default Login;