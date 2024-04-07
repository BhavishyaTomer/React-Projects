import { createContext, useReducer } from "react";
export const workoutContext = createContext();
export const workoutContextProvider = ({ children }) => {
    const workoutReducer = (state, action) => {
        switch (action.type) {
            case ('setWorkout'):
                return {
                    workouts: action.payload
                }
            case ('createWorkout'):
                return {
                    workouts: [action.payload, ...state.workouts]
                }
            case ('deleteWorkout'):
                return {
                    workouts: state.workouts.filter((w) => w._id !== action.payload._id
                    )
                }
            default:
                return state;

        }
    }

    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })
    return (
        <workoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </workoutContext.Provider>
    )
}