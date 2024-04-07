const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const workoutRoutes=require('./routes/workoutRoutes')
dotenv.config()
const app=express();
const port=8000
app.use(cors())
app.use(express.json())
app.use('/api/workout',workoutRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database is online")
    app.listen(process.env.PORT,()=>{
        console.log("backend satrted",process.env.port)
    })
}).catch((err)=>
console.log("error is there",err))

