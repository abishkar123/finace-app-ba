import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json()); 
app.use(morgan('dev')); 

// Allow cross-origin requests
app.use(cors({
  origin: 'http://fa-app-bucket.s3-website-ap-southeast-2.amazonaws.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
}));


const PORT = process.env.PORT || 8000;

//datatbase connnect
import {connectDB} from './src/config/dbConfig.js'
connectDB()

//APIs
import UserRouter from './src/router/UserRouter.js'
app.use("/api/v1/user", UserRouter)

import FormRouter from './src/router/FormRouter.js'
app.use("/api/v1/form", FormRouter)


//root url request
app.use("/", (req, res, next) => {
    const error = {
      message: "You dont have promission here",
    };
    next(error);
  });
  
//global error handleer
app.use((error, req, res, next) => {
    console.log(error);
    const statusCode = error.errorCode || 404;
    res.status(statusCode).json({
      status: "error",
      message: error.message,
    });
  });

  app.listen(PORT, (error) => {
    error
      ? console.log(error)
      : console.log(`Server running at http://localhost:${PORT}`);
  });