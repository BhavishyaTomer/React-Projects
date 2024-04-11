const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors')
const keepRoutes=require('./route/keepRoutes')
const app=express()

app.use(cors())

app.use(express.json())
dotenv.config()
app.use('/api/keep',keepRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("dataBase is online")
    app.listen(process.env.PORT,()=>{
        console.log("server started at",process.env.PORT);
    })
}).catch((err)=>{
    console.log("error encountered",err);
})