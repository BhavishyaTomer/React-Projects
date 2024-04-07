import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Editplan.css'
import { useWorkoutContext } from '../hooks/useContextHooks';

const EditPlan = () => {
  const { workouts, dispatch } = useWorkoutContext(); // Corrected import her
    const [title,setTitle]=useState('')
    const [load,setload]=useState('')
    const [reps,setreps]=useState('')
    const [error,setError]=useState('')
    const storeWorkout=async (e)=>{
        e.preventDefault()
     const workout={title,reps,load}
     console.log("workout is",workout)
     const respone= await fetch('http://localhost:4200/api/workout',{
      method: 'POST',
      body: JSON.stringify(workout),
      headers:{'Content-type':'application/json'}
     })
     console.log("response",respone)
     const json=await respone.json()
     if(!respone.ok)
     {
      setError(json.error)
     }
     if(respone.ok)
     {
      setError(null),
      setTitle(''),
      setload(''),
      setreps('')
    
      
        dispatch({type:'createWorkout',payload:json})
      
     }
    }
  return (
    <div>
        <form onSubmit={storeWorkout} className='workout'>
      <TextField id="standard-basic" label="Title" variant="standard" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <TextField id="standard-basic" label="Loads" variant="standard" value={load}  onChange={(e)=>setload(e.target.value)}/>
      <TextField id="standard-basic" label="reps" variant="standard" value={reps}  onChange={(e)=>setreps(e.target.value)}/>
      <Button variant="contained" endIcon={<SendIcon />} type='submit'>
        Send
      </Button>
      {error&&<div>{error}</div>}
      </form>
    </div>
  )
}

export default EditPlan
