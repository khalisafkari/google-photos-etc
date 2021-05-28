//
// const app = require('express')();
// const cors = require('cors');
// const { Blogger,Solidfiles,GPhotos } = require('../dist')
// app.use(cors())
//
// app.get('/',(req,res)=>{
//     res.send('data')
// })
//
// app.get('/WithBlogger',async(req,res) => {
//     try {
//         const data = await Blogger.WithBlogger(req.query.url || 'https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html');
//         res.send(data)
//     } catch (error) {
//         res.send()
//     }
// });
//
// app.get('/WithVideoToken',async(req,res) => {
//     try {
//         const data = await Blogger.WithVideoToken(req.query.url || 'https://www.blogger.com/video.g?token=AD6v5dyQXUjqRayoSfBIT3qk5lxWIjHZfaVrQbwohxdEXTw2ulOd9Dt7mrxZOyhuVoYBPUATpbeo9uZDqkCmVkzKsS2LYmzHXjsZRKEjDzK7OgNVKJBm59j_LJUE2djMywWz2JDQ-us')
//         res.send(data)
//     } catch (error) {
//         res.send()
//     }
// })
//
// app.get('/Solidfiles',async(req,res) => {
//     try {
//         const data = await Solidfiles.get(req.query.url || 'http://www.solidfiles.com/v/aZKjvxnDmk3NX' );
//         res.send(data)
//     } catch (error) {
//         res.send()
//     }
// })
//
// app.get('/GPhotos',async(req,res) => {
//     console.log(req.headers)
//     try {
//         const data = await GPhotos.get(req.query.url || 'https://photos.google.com/share/AF1QipMTEPAiVF8t0YqLukflnOSQjwfd8ARIoT2h37AXvYO1uaWodbeiFoBUDuD_19tEbg/photo/AF1QipPA2Bq0JlAR9LoGD3mogsxSb9OZWEG4XqBDD4Rv?key=cjhUT0xrZjM5NGN2SVRLOVptZU5SMUlKV0lQYWpB')
//         // let todos = []
//         // for(let i = 0;i < data.length;i++){
//         //     if(data[i]._res === "medium"){
//         //         todos.push({
//         //             id:data[i]._id,
//         //             res:data[i]._res
//         //         })
//         //     }
//         // }
//         res.send(data)
//     } catch (error) {
//         res.send()
//     }
// })
//
//
//
// app.listen(3000,() => {
//     console.log(3000)
// });

const express = require('express');
const cors = require('cors');
const { GP, getBlogList, getSourceVideo, SB } = require('../dist');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).send({
        google: {
            url: '/gp?url=https://photos.google.com/share/AF1QipNccwxrdUIfGMkLpt-yA-QxQY7HGqg7_hqIinlPaYxg3rLhZIufTv0qB_fFs4pKYA/photo/AF1QipNRiHEP9DTCQkhhIC1AMah7eMcnm8UN8KTLLW5j?key=TUFuaUtNXzZzdUtsem1iUDNJcFNwbTFqQ3UzWC13'
        },
        blogger:{
            list: '/blist?url=https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html',
            source: '/bsource?url=https://www.blogger.com/video.g?token=AD6v5dw27DkFA4pN3A4ym5njnsCfyh0s8spLVR2z2OfXBPSrTIsYZcHSCrpe6GMfmiO5zVxGf2p4ZBwPX6RlX4_ul7yIdQR4Fv8jXSSoKSeJ-4ZJx3sBW4SwQPIogsCMqB4WNNw_vhw'
        },
        streamsb:{
            url: '/sb?url=https://sbembed1.com/wl8hcnm2ihlr.html#'
        }
    })
});

app.get('/gp', async (req, res) => {
   const url = req.query.url;
   if (!url) {
       return res.status(201).send({
           status: 201,
           message: 'not valid url'
       })
   }
   const fetch = await GP(url);
   return res.status(200).send(fetch)
})

app.get('/blist', async (req,res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(201).send({
            status: 201,
            message: 'not valid url'
        })
    }

    const fetch = await getBlogList(url);
    return res.status(200).send(fetch)
})

app.get('/bsource', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(201).send({
            status: 201,
            message: 'not valid url'
        })
    }

    const fetch = await getSourceVideo(url);
    return res.status(200).send(fetch);
})

app.get('/sb', async (req, res) => {
    const url = req.query.url;
    if(!url) {
        return  res.status(201).send({
            status: 201,
            message: 'not valid url'
        })
    }
    const fetch = await SB(url);
    return res.status(200).send(fetch)
})

app.listen(3000);
