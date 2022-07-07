const e = require('express');
const mongoose=require('mongoose');

// mongoose.connect('mongodb+srv://user:<987654321>@cluster0.qsbdg.mongodb.net/?retryWrites=true&w=majority',{

// }).then(()=>{
//     console.log('CONNECTED WITH DATABASE SUCCESSFULLY');
// }).catch((err)=>{
//     console.log('ERROR:'+err);
// })

mongoose.connect('mongodb+srv://user:987654321@cluster0.qsbdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
   
}).then(()=>{
    console.log('SUCCESSFULLY CONNECTED WITH MONGODB ATLAS');
}).catch((err) =>{
    console.log('ERROR: '+ err);
})

