import FormSchema from './FormSchema.js'

export const createApplication = (obj) => {
    return FormSchema(obj).save();
  };
  
  export const getAppliation = async(page, limit) => {
      if(page <= 0 || limit <= 0){
        throw new Errow ("page and limit must be postitive integers")
      }

      const offset = (page  - 1)*limit;
      const lists = await FormSchema.find().skip(offset).limit(limit)
      const totalItems = await FormSchema.countDocuments()

      return {
        lists, totalItems,
        totalPages: Math.ceil(totalItems/limit),
        currentPage:page
      }
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
