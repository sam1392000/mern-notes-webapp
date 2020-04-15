const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const newSchema=new Schema({
    username : {type:String,required:true,unique:true,trim:true},
},
{
    timestamps:true,
});
const User=mongoose.model('User',newSchema);
module.exports=User;