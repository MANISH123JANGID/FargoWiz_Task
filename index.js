const express = require('express');
const app = express();
const port =  3000;
const bodyParser=require('body-parser');
const {save , fetch, signin, requiresignin } = require('./controller');
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

 // authentication using jwt 
app.get('/signin',signin);

/*to access other pages we need authentication at every request after signin so requiresign
 will authenticate using the jsonwebtoken give to the user during signin */
app.get('/cart', requiresignin);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
