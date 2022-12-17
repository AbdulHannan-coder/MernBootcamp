const { userModel } = require('../models');

const addUser = (body) => {
    const doc = new userModel(body);
    const query = { _id: doc._id};
    return userModel.findOneAndUpdate(query, doc, {
        upsert: true,
        new: true
    });
};
    
const updateUser = (body) => {
    const query = { _id: body.id };
    console.log(query);
    return userModel.findOneAndUpdate(query, body, {
        new: true
    });
};
    
const deleteUser = (filter) => {
    return userModel.findByIdAndDelete(filter);
};
    
const getAllUsers = (filter) => {
    return userModel.find(filter);
};
    
const getUser = (filter) => {
    return userModel.findOne(filter);
};
    
module.exports ={
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
}