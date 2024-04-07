const express=require('express')
const router=express.Router()
const Workout=require('../models/workoutSchemas')
const { getWorkout, getAllWorkout, createWorkout ,deletePost,updatePost} = require('../controller/workoutController');

router.get('/',getAllWorkout)

router.get('/:id',getWorkout)
router.post('/', createWorkout);


router.delete('/:id',deletePost)

router.patch('/:id',updatePost)
module.exports=router