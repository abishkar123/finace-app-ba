import FormSchema from './FormSchema.js'

export const createApplication = (obj) => {
    return FormSchema(obj).save();
  };
  
  export const getAppliation = () => {
      return FormSchema.find();
    }; 
  
    export const updateApplication = (_id, obj) => {
      return FormSchema.findByIdAndUpdate(_id, obj, { new: true });
    };
    
  
  
    export const deleteApplications = (idsArg) => {
      return FormSchema.deleteMany({
        _id: { $in: idsArg },
      }).exec(); 
    };
    

  // export const deleteSignleProduct = (filter) => {
  //   return productSchema.findOneAndDelete(filter, obj);
  // };
