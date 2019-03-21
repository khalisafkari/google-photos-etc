const app = require('express')();
const cors = require('cors');
const {blogger} = require('./api')
app.use(cors())

app.get('/',async(req,res)=>{
    if(!req.query.url){
        res.send({status:'error paramete'})
    }else{
        const url  = await blogger(req.query.url);
        res.send(url)
    }
})




app.listen(3000,(req,res)=>{
    console.log(`Running Port 3000`);
})