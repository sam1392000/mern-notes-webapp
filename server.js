const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose');
const exerciseRouter=require('./routes/exercise')
const userRouter=require('./routes/user')

const app=express();
app.use(cors())
app.use(express.json());
app.use('/exercise',exerciseRouter);
app.use('/user',userRouter)

const db=require('./config/keys').mongoURI;//db config
mongoose.connect(db,{useNewUrlParser:true, useCreateIndex:true})// db connection
   .then(()=>console.log('Database conneted...'))
   .catch(err=>console.log(err));


 const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
 })
