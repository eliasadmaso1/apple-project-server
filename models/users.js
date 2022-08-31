const mongoose = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true,
        
    },
    userName:{
        type:String,
        required:true,
        uniqe:true,
    },
    email:{
        type:String,
        required:true,
        uniqe:true,
      
    },
    password:{
        type:String,
        required:true,
        uniqe:true,
     
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true});



module.exports = mongoose.model("users",userSchema);