const express = require('express');
const app = express();
const port =  3000;
const bodyParser=require('body-parser');
const {save , fetch } = require('./controller');
app.get('/', (req, res) =>{
    res.send("this is A WEB SERVER ");
    res.end();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./dbconnect');

// for saving the user data 
app.post('/save',save);

// for fetching the data of all users 
 app.get('/fetch',fetch);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
