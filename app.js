const express = require('express');
const app = express();
const port =  3000;
const bodyParser=require('body-parser');
const {save} = require('./controller');
app.get('/', (req, res) =>{
    res.send("this is A WEB SERVER ");
    res.end();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./dbconnect');

app.post('/save',save);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
