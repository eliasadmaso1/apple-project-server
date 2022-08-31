const mongoose = require('mongoose');

const schema = mongoose.Schema;
const cartProductSchema = new schema({
    productId: {
        type: String,
        required: true,
      },
      userId:{
        type:String,
        required:true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
},
{timestamps:true});



module.exports = mongoose.model("cartProducts",cartProductSchema);