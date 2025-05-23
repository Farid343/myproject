import express from 'express'
import cors from 'cors'
import DealersRouter from './routes/productRouter.js'
import { connectDB } from './configs/config.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",DealersRouter)

connectDB();

app.listen(5000, () => {
    console.log("databaza qaldirildi");
})