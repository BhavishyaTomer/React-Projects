const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.json({
        msg:"hellp there"
    })
    console.log("get for multiple user")
})

router.get('/:id',(req,res)=>{
    res.json({
        msg:"hellp there"
    })
    console.log("get a single user")
})
router.post('/',(req,res)=>{
    res.json({
        msg:"hellp there"
    })
    console.log("posting for /")
})

router.delete('/:id',(req,res)=>{
    res.json({
        msg:"hellp there"
    })
    console.log("deleting for /")
})

router.patch('/:id',(req,res)=>{
    res.json({
        msg:"hellp there"
    })
    console.log("update for /")
})
module.exports=router