const {
    signUp
} = require('../beans/common');

const userSignup = async(req, res, next) => {
    const body = req.body;
    try{
        const result = await signUp(body);
        return res.status(200).send(result);
    }
    catch(ex){
        return res.status(400).send(ex);
    }
};

module.exports = {
    userSignup
};