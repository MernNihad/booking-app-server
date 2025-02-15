import mongoose,{Schema} from "mongoose";

const cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    hotelname:{
        type:String,
        required:true
    },
    ImageLink:{
        type:String,
        required:true
    }
})

export const CartModel = mongoose.model('cart',cartSchema)