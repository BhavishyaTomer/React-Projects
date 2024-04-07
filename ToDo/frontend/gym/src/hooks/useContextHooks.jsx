import { workoutContext } from "../context/workoutContext";
import { useContext } from "react";
export const useWorkoutContext=()=>{
    const context=useContext(workoutContext)
    if (!context) {
        throw Error('useWorkouts Context must be used inside an Workouts ContextProvider')
        }
    return context
}