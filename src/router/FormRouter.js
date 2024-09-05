import express from "express"
import { createApplication,  deleteApplications, getAppliation, updateApplication } from "../model/form/FormModel.js";

const router = express.Router()

//Create application 
router.post("/", async (req, res, next) => {
    try {
      
        const {name, userid, ...rest} = req.body
        console.log(req.body)
        const result = await createApplication(req.body);
        
        if (result?._id) {
          return res.status(200).json({
            status: "success",
            message: "Successfully Your application Submit!",
            result,
          });
        
      }
      res.status(400).json({
        status: "error",
        message: "Unable to submit your application, Please try again later.",
      });
    } catch (error) {
      if (error.message.includes("E11000 duplicate key error collection")) {
        error.errorCode = 200;
        error.message =
          "This Application has been alredy created, change the name and try again later";
      }
      next(error);
    }
  });

  //Get Application 
router.get("/",async (req, res, next )=>{
    
    try{
        const lists = await getAppliation();
        res.status(200).json({
            status:"success",
            message:"Here is the application lists",
            lists,
        })

    }catch(error){
        next(error);
    }
})


  
//delete application 
router.delete("/", async (req, res, next) => {
  try {
    const ids = req.body;
   
    if (!Array.isArray(ids)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid input. Expected an array of IDs.",
      });
    }
    const { deletedCount } = await deleteApplications(ids);

    deletedCount
      ? res.status(200).json({
          status: "success",
          message: "Selected Application has been deleted.",
        })
      : res.status(404).json({
          status: "erro",
          message: "Unable to delete the application, please try again later",
        });
  } catch (error) {
    next(error);
  }
  });


router.put( "/", async (req, res, next) => {
    try {
  
      const { _id, ...rest } = req.body;
     
      console.log(req.body)
      console.log(_id)

      const result = await updateApplication(_id, req.body);

      if (result?._id) {
        return res.json({
          status: "success",
          message: "The Applcation has been Updated!",
        });
      }

      res.json({
        status: "error",
        message: "Error updating new Applicaiton, contact administration",
      });
    } catch (error) {
      next(error);
    }
  }
);

 export  default router;