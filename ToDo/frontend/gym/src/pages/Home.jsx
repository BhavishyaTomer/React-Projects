import React, { useEffect, useState } from 'react';
import WorkoutDetail from '../component/WorkoutDetail';
import EditPlan from '../component/EditPlan';
import { useWorkoutContext } from '../hooks/useContextHooks';
const Home = () => {

  const { workouts, dispatch } = useWorkoutContext(); // Corrected import here

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(`http://localhost:4200/api/workout`);
      console.log("response is", response);
      const json = await response.json();
      console.log("json is", json);
      // setWorkouts(json); // Update state with fetched workouts
      if(response.ok)
      {
        dispatch({type:'setWorkout',payload:json})
      }
    };

    fetchWorkout(); // Call the function to fetch workouts on component mount
  }, [dispatch]); // Empty dependency array: fetch only once on mount

  return (
    <div className='home'>
     <div className='workouts'>
      {workouts&&workouts.map((data)=>(
        
        <WorkoutDetail key={data._id} shame={data}/>)
      )}
      
     </div>
     <div className='plans'>
     <EditPlan/>
     </div>
    </div>
  );
};

export default Home;
