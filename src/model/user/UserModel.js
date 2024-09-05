import UserSchema from "./UserSchema.js";

export const createNewUser = (obj) =>{
    return UserSchema(obj).save()
}

export const updateUser = (filter, obj) => {
    return UserSchema.findOneAndUpdate(filter, obj, { new: true });
};

export const getUser = ()=>{
    return UserSchema.findOne();
    
}

export const findUser = (filter)=>{
    return UserSchema.findOne(filter);
}


export const updateProfile1 = ({ _id, rest }) => {
    return UserSchema.findByIdAndUpdate(_id, rest, { new: true });
};