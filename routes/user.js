const router=require('express').Router();
const user=require('../models/user.model')
router.route('/').get((req,res)=>{
    user.find()
        .then(val=>res.json(val))
        .catch(err=>res.status(400).json('Error ' + err)); 
})
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const newuser=new user({
        username
    });
    newuser.save()
        .then(()=>res.json('User Added'))
        .catch(err=>res.status(400).json('Error ' + err))
})
module.exports=router