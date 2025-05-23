import mongoose, { Schema } from "mongoose";

const ProductSchema = mongoose.Schema (
    {
        image:{type:String, required:true},
        title:{type:String, required:true},
        price:{type:String, required:true},
    },
    {
        timestamps:true
    }
)

const ProductModel = mongoose.model("DEALER",ProductSchema)


export default ProductModel