import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { useWorkoutContext } from '../hooks/useContextHooks';

const WorkoutDetail = ({shame}) => {
  const{dispatch}=useWorkoutContext();
  const handleDeleteClick = async () => {
    console.log("Deleting item with id:",shame._id);
   const response=await fetch(`http://localhost:4200/api/workout/${shame._id}`,{
    method: 'DELETE'
   })
   const json=await response.json()
   console.log("deleted thing is",json)
   if(response.ok)
   {
    dispatch({type:'deleteWorkout',payload:json})
   }
  };
  return (
        <Card sx={{ maxWidth: 345 , marginY: 3}}>
          
          <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {shame.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    <span><strong>Load (kg): </strong></span> {shame.load}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    <span><strong>Reps: </strong></span>{shame.reps}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {shame.createdAt}
  </Typography>
</CardContent>

          <CardActions>
          <IconButton onClick={() => handleDeleteClick(shame._id)}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>

          </CardActions>
        </Card>
      
  )
}

export default WorkoutDetail
