const User= require('./schema');

exports.save = (req, res)=>{
    User.findOne({email:req.body.email}).exec(async (error,user)=>{
        if (user)
          return res.status(400).json({
            error: "user data already saved"
          });
        const {firstName, lastName,email,phoneNumber} = req.body;
        const _user= await new User({firstName,lastName,email,phoneNumber});

        await _user.save().then(()=>{
            res.status(201).json({message:'USER DATA SAVED SUCCESSFULLY'});
            console.log("DATA SAVED SUCCESSFULLY");
        }).catch((err)=>{
            res.status(400).json({message:'SOMETHING WENT WRONG! PLEASE TRY AGAIN LATER '})
        })
    
        
    })
}