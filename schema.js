const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    phoneNumber:{
        type: "number",
        required: true
    }
},{
    timestamp:true
});

module.exports = mongoose.model('User',userSchema);