const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  title:{
    type:String,
    required:true
},
subTitle:{
    type:String,
    required:false
},
CPU:{
    type:String,
    required:false
},
GPU:{
    type:String,
    required:false
},
memory:{
    type:String,
    required:false
},
SSD:{
    type:String,
    required:false
},
price:{
    type:Number,
    required:true
},
status:{
    type:String,
    required:true,
    default:"In Stock"
},
inBox:{
    type:Array,
    required:true
},
gallery:{
    type:Array,
    required:true
},
storage:{
  type:String,
  required:false
},
wifi:{
  type:String,
  required:false
},
inch:{
  type:String,
  required:false

},
category:{
  type:String,
  required:true
}
 
});

module.exports = mongoose.model("products", productSchema);
