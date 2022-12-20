const {
    usersController,
    adminsController,
    clientsController
} = require('../controllers');

const signUp = async(body) => {
    if(!body.username){
        return Promise.reject({error:"Username is required"})
    }
    if(!body.password){
        return Promise.reject({error:"Password is required"})
    }
    if(!body.userType){
        return Promise.reject({error:"Usertype is required"})
    }
    if(!body.data){
        return Promise.reject({error:"Data is required"})
    }

    try{
        let result = null;
        const userType = body.userType;
        switch(userType){
            case 'admin':
                result = await adminsController.addAdmin(body.data);
                break;
            
            case 'client':
                result = await clientsController.addClient(body.data);
                break;

            default:
                return Promise.reject({error:"UserType is invalid"});
        }
    }
    catch(ex){
        return Promise.reject({error : ex});
    }
};

module.exports = {
    signUp
};