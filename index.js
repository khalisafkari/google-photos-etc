const app = require('express')();
const cors = require('cors');
const request = require('request');
const Video = require('./api')

app.use(cors())

app.get('/',async(req,res)=>{
    if(!req.query.url){
        res.send({
            status:'error query ',
            build:'/?url='
        })
    }else{
        Video.Blogger({uri:req.query.url}).then(response=>{
            res.send(response)
        })
    }
})


app.get('/video/:type',async(req,res)=>{
    if(!req.query.url){
        res.send({
            status:'error query ',
            build:'/video/{1-2}?url='
        })
    }else{
        Video.Blogger_Video({uri:req.query.url,type:req.params.type}).then(response=>{
            if(!response.code){
                request(response).pipe(res);
            }else{
                res.send(response);
            }
        })
    }
})

app.get('/cloudvideo',async(req,res)=>{ // https://cloudvideo.tv
   Video.CloudVideo({uri:req.query.url}).then(response=>{
       res.send(response);
   })
})

app.get('/photos',async(req,res)=>{
    if(!req.query.url){
        res.send({
            status:'errorr',
            build:'query not fount'
        })
    }else{
        Video.Photos(req.query.url)
        .then(response=>{
            res.send(response);
        })
    }
})


app.listen(3000,(req,res)=>{
    console.log(`Running Port 3000`);
})