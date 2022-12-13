const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true 
    },
    password: { 
        type:String, 
        required: true 
    },
    userType: { 
        kind: {
            type: String, 
            enum: ['admin', 'client'] 
        }, 
        item: { 
            type: mongoose.Types.ObjectId, 
            refPath:'userType.kind' 
        }}
}, {collection: 'users'});

module.exports = mongoose.model('users', userSchema);