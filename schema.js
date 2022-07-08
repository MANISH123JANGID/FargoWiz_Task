const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
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
    },
    password:{
        type: 'string',
        required: true
    }
},{
    timestamp:true
});

userSchema.methods={
    authenticate: async (password) => {
        try{
            return await bcrypt.compare(password,this.hash_password);
        }
        catch(err){
           
        }
    }   
};

module.exports = mongoose.model('User',userSchema);