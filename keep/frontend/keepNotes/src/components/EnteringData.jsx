import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import keepContext from '../context/KeepContext';
const EnteringData = () => {
  const [updateBoolea, setUpdateBoolea] = useState(false);
  const [list,setList]=useState('')
  const{task}=useContext(keepContext)
  useEffect(()=>{
  console.log("rendered")
  setList(task.task)
  setUpdateBoolea(task.task ? true : false);
  },[task])

  const submitResponse = async (e) => {
    e.preventDefault();
    console.log("working", list);
    

    const data = {
      task: list
    };

    if(updateBoolea){
      try {
        const response = await fetch(`http://localhost:4242/api/keep/${task._id}`, {
          method: 'PUT',
          body: JSON.stringify(data), // Stringify the data object
          headers: { 'Content-type': 'application/json' }
        });
        console.log("response", response);
        const json = await response.json();
        if (!response.ok) {
          console.log("error in update", json.error || response.statusText);
        } else {
          console.log("outcome in update", json);
          setList('')
          setUpdateBoolea(false)
        }
      } catch (error) {
        console.error("Error in update:", error);
      }
    }
    else{
      try {
        const response = await fetch('http://localhost:4242/api/keep/', {
          method: 'POST',
          body: JSON.stringify(data), // Stringify the data object
          headers: { 'Content-type': 'application/json' }
        });
        console.log("response", response);
        const json = await response.json();
        if (!response.ok) {
          console.log("error in post", json.error || response.statusText);
        } else {
          console.log("outcome in post", json);
          setList('')
        }
      } catch (error) {
        console.error("Errorin post", error);
      }
    }
  
   
  }
  
  return (
    <div>
      <form onSubmit={submitResponse} >
    <Box
      sx={{
        width: 600,
        maxWidth: '100%',
        display:'flex'
      }}
    >
      <TextField fullWidth label="Enter the task" id="fullWidth" value={list} onChange={(e)=>setList(e.target.value)}/>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />} type='submit'>
        Send
      </Button>
      </Stack>
     
    </Box>
    </form>
    </div>
  )
}

export default EnteringData
