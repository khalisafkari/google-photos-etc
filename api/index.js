const cheerio = require('cheerio');
const axios = require('axios');

class Video {    
    async Blogger({uri}){
        const url = await axios.get(uri);
        const $ = cheerio.load(url.data);
        const todos = []
        $('iframe').each((index,item)=>{
            const $element = $(item);
            if(!$element.attr('src')){}else{todos.push($element.attr('src'))};
        })
        for(let i = 0;i < todos.length;i++){todos[i] = await multi(todos[i])}
        return todos;
    }

    async Blogger_Video({uri,type}){
        if(type == 1){
            const url = await bg_url(uri);
            return url;
        }else if(type == 2){
            const url = await multi(uri);
            return url.url
        }else{
            return {
                code:1,
                message:'params not found'
            }
        }

    }

    async CloudVideo({uri}){
        const its = uri.replace('https://cloudvideo.tv/','')
        const url = await axios.get(uri);
        const $ = cheerio.load(url.data);
        const todos = {
            video_hls_only:cheerio.load(url.data)('video > source').attr('src'),
            data:[]
        }
        $('#download > a').each(async(i,item)=>{
            const $element = $(item);
            const m = $element.attr('onclick').replace('download_video(','').replace(')','').replace(`'${its}'`,'');
            if(m.indexOf(`'n'`) !== -1){
                todos.data.push({
                   title:$element.text(),
                   url:`https://cloudvideo.tv/dl?op=download_orig&id=${its}&mode=n&hash=${m.replace(`,'n','`,'').replace(`'`,'')}` 
                })
            }else if(m.indexOf(`'h'`) !== -1){
                todos.data.push({
                    title:$element.text(),
                    url:`https://cloudvideo.tv/dl?op=download_orig&id=${its}&mode=n&hash=${m.replace(`,'h','`,'').replace(`'`,'')}`
                })
            }else if(m.indexOf(`'l'`) !== -1){
                todos.data.push({
                    title:$element.text(),
                    url:`https://cloudvideo.tv/dl?op=download_orig&id=${its}&mode=n&hash=${m.replace(`,'l','`,'').replace(`'`,'')}`
                })
            }
        })
        for(let i = 0;i < todos.data.length;i++){
            const data = await cloud(todos.data[i].url);
            todos.data[i].url = data;   
        }
        return todos;
    }
}

const cloud =async(i) =>{
    const url = await axios.get(i);
    return cheerio.load(url.data)('a[class="btn btn-primary btn-block btn-signin"]').attr('href')
}

const multi = async(i) => {
    const url = await axios.get(i);
    const $ = cheerio.load(url.data);
    const data = $('script')[0].children[0]
    const rp = JSON.parse( data.data.replace('var VIDEO_CONFIG =',''))
    return{
        poster:rp.thumbnail,
        url:rp.streams[0].play_url
    }
}

const bg_url = async(s) => {
    const i = await axios.get(s);
    const url = await axios.get(cheerio.load(i.data)('iframe').attr('src'));
    const $ = cheerio.load(url.data)('script')[0].children[0];
    const rp = JSON.parse($.data.replace('var VIDEO_CONFIG =',''));
    return rp.streams[0].play_url;
}

// const blogger = async(url) => {
//     let uri = await axios.get(url);
//     const $ = cheerio.load(uri.data);
//     const data = $('script')[0].children[0]
//     const rp = JSON.parse( data.data.replace('var VIDEO_CONFIG =',''))
//     return rp.streams[0];
// }

module.exports = new Video()