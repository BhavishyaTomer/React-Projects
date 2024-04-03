const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const workoutRoutes=require('./routes/workoutRoutes')
dotenv.config()
const app=express();
const port=8000
app.use(express.json())
app.use('/api/workout',workoutRoutes)
app.listen(process.env.PORT,()=>{
    console.log("backend satrted",process.env.port)
})