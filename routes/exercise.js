const router= require('express').Router();
const exerciseModule=require('../models/exercise.model');

router.route('/').get((req,res)=>{
    exerciseModule.find()
        .then(val=>res.json(val))
        .catch(err=>res.status(400).json('Error '+ err))
})
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);
    const newExercise=new exerciseModule({username,description,duration,date});
    newExercise.save() 
        .then(()=>res.json("Exercise Added"))
        .catch((err)=>res.status(400).json('Error ' + err))
})
router.route('/:id').get((req,res)=>{
    exerciseModule.findById(req.params.id)
        .then((exercise)=>res.json(exercise))
        .catch(err=>res.status(400).json('Error '+ err))
})
router.route('/:id').delete((req,res)=>{
    exerciseModule.findByIdAndDelete()
        .then(()=>res.json('Exercise Deleted'))
        .catch((err)=>res.status(400).json('Error '+ err))
})

router.route('/update/:id').post((req,res)=>{
    exerciseModule.findById(req.params.id)
        .then(exercise=>{
            exercise.username=req.body.username;
            exercise.description=req.body.description;
            exercise.duration=Number(req.body.duration);
            exercise.username=Date.parse(req.body.date);
            exercise.save()
                .then(()=>res.json('Value Updated'))
                .catch((err)=>res.status(400).json('Error '+ err))
        })
        .catch((err)=>res.status(400).json('Error '+ err))
})
module.exports=router;

