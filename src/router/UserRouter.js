import express from 'express'
import { hashPassword, comparePassword } from '../utils/bcrypt.js'
import { createNewUser, findUser, getUser } from '../model/user/UserModel.js'
const router = express.Router()

//Register User
router.post('/register', async (req, res, next) => {
    console.log('Request Body:', req.body);
    try {

        const { fname, lname, email, password } = req.body;
    
        req.body.password = hashPassword(req.body.password);
  
      const result = await createNewUser(req.body);
  
      
      if (result?._id) {
        return res.status(201).json({
          status: 'success',
          message: 'Your account has been successfully created',
        });
      }
  
      return res.status(400).json({
        status: 'error',
        message: 'Unable to create a new user',
      });
  
    } catch (error) {
      if (error.message.includes('E11000 duplicate key error collection')) {
        error.message = 'An account already exists with this email';
        error.statusCode = 400;
      }
      
      next(error);
    }
  });
  

//login user 
router.post("/login", async(req, res, next)=>{
    try {
        const {email, password} = req.body
        const newcustomer = {
            email:email,
            password:password
        }

        const user = await findUser({email})
        const isPassMatch = comparePassword(password, user.password);

        if(isPassMatch){
            user.password = undefined;
                user.__v = undefined;
                res.status(200).json({
                    status: "success",
                    message: "Login success fully",
                    user
                })
                return
        }else {

        }res.status(400).json({
            status: "error",
            message: "please register to become new customer",
            newcustomer

        })
        
    } catch (error) {
        next(error)
        
    }
})

//getuser 
router.get("/user-profile", async(req,res, next)=>{
  try {
    const users = await getUser()

    res.status(200).json({
      status: "Success",
      message:"user found",
      users,
    })
    
  } catch (error) {
    next(error)
    
  }
})


export default router