import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();
const PORT = 3500;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import userRouter from './routes/user.js'


app.use("/api",userRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


app.listen(PORT,()=>{
  mongoose.connect("mongodb://127.0.0.1:27017/aarmbh")
  .then(()=>{
    console.log("connected to http:localhost:",PORT);
    console.log("connected to database")
  })
  .catch(()=>{
    console.log("error connecting to database")
  })
})



