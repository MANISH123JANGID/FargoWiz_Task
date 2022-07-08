const User= require('./schema');
const jwt=require('jsonwebtoken');
exports.save = (req, res)=>{
    User.findOne({email:req.body.email}).exec(async (error,user)=>{
        if (user)
          return res.status(400).json({
            error: "user data already saved"
          });
        const {firstName, lastName,email,phoneNumber, password} = req.body;
        const _user= await new User({firstName,lastName,email,phoneNumber,password});

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
     
     //search  based on user email

     let userList= data;
     let index= userList.find(user=>user.email==="jangid.k11@gmail.com" && user.firstName==="Mash");
     if(index!=undefined){
      res.status(200).json({
        message: "User Found!",
        data:index
      })
     }
     else{
      res.status(500).json({
        message: "User Not Found!",
      })
     }

  })

}

exports.signin=(req,res,next) => {
  User.findOne({ email: req.body.email}).exec((err, user) => {
      if(err){
          return res.status(400).json({message:"User is not registered"});
      }
      if(user){
          if(user.authenticate(req.body.password)){
              // const token =jwt.sign({_id:user._id},process.env.JWT_KEY,{expiresIn:"1h"});
              // const {_id,firstName,lastName,email,password}=user;
              // console.log('jwt given to user');

              const token = jwt.sign(
                { user_id: user._id },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
  
          }
          else{
              return res.status(400).json({
                  message: "Invalid PASSWORD"
              })
          }
      }
  })
  next();
}

exports.requiresignin= (req,res,next) => {
  const token=req.headers.authorization.split(' ')[1];
  const user=jwt.verify(token,process.env.JWT_KEY);
  req.user=user;
  next();
}

