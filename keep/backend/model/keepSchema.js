const mongoose=require('mongoose')
const scehma=mongoose.Schema
const workoutSchema=new scehma({
    task:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("keep",workoutSchema)