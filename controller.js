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

exports.fetch= (req,res) => {
  User.find().exec(async (err,data)=>{
    if(err) {
      res.status(400).json({
        message:'Error in fetching data'
      })
    }
     if(data===0){
      res.status(500).json({
        message:"No Data Found"
      })
     }
     else{
      res.status(200).json({message:"USER DATA FOUND!",data: data})
     }
  })
}