import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config"

import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string)
.then(()=> console.log('Conneted to mongoDb database'));

const app = express();
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello from server");
})
app.get('/test',async(req:Request,res:Response)=>{
    res.json({message:'Hello from the test api end point'});
});

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is listening on port: ${PORT}`)
})