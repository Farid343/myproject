import express from "express"
import ProductModel from "../models/productModel.js"

const getProduct = async(req , res) => {
    const product = await ProductModel.find()
    res.json(product)
}

const postProduct = async(req ,res) => {
    const products=req.body
    await ProductModel.create(products) 
    res.json(products)
}

const deleteProduct = async(req ,res) => {
    const {id} = req.params
    const product = await ProductModel.findByIdAndDelete({_id:id})
    res.json( product,`${id} id-li mehsul silindi`)
}

export { getProduct,postProduct,deleteProduct}