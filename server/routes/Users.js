const express = require('express')
const router = express.Router()
const {Users}= require('../models')


router.post("/", async (req,res)=>{
    const {username ,password} = req.body
   await Users.create(username)
   res.json(username)

})



module.exports=router