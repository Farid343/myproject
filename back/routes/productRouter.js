import express from 'express'
import { deleteProduct, getProduct, postProduct } from '../controller/productController.js'

const router = express.Router()

router
.get("/dealers",getProduct)
.post("/dealers",postProduct)
.delete("/dealers",deleteProduct)


export default router