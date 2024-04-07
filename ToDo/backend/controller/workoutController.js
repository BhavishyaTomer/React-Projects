const Workout=require('../models/workoutSchemas')
const mongoose=require('mongoose')

const getAllWorkout=async(req,res)=>{
    const workout=await Workout.find({}).sort({createdAt:-1})
    return res.status(200).json(workout)
}
const getWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ error: "No workout found with the provided ID" });
        }
        return res.status(200).json(workout);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const  createWorkout=async(req,res)=>{
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout); // Send response only once, after creating the workout
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send error response
    }
}

const deletePost=async(req,res)=>{
    const{id}=req.params;
   
    try {
        const workout=await Workout.findByIdAndDelete({_id:id})
        if (!workout) {
            return res.status(404).json({ error: "No workout found with the provided ID" });
        }
        return res.status(200).json(workout);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
    
}

const updatePost=async(req,res)=>{
    const{id}=req.params;
   
    try {
        const workout=await Workout.findOneAndUpdate({_id:id},...req.body)
        if (!workout) {
            return res.status(404).json({ error: "No workout found with the provided ID" });
        }
        return res.status(200).json(workout);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
    
}
module.exports={getAllWorkout,getWorkout,createWorkout,deletePost,updatePost}