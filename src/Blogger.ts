import cheerio from 'cheerio';
import axios from 'axios';

interface video {
    thumbnail?:string | undefined
    iframe_id?:string | undefined
    allow_resize?:boolean | null
    streams:Array<any> | null
}

export interface WithBlogger {
    id:string | undefined
    video?:video
}

class Blogger {
    public async WithBlogger(uri:string):Promise<WithBlogger[]>{
        const url = await axios.get(uri);
        const $ = cheerio.load(url.data);
        const todos:WithBlogger[] = []
        const l = $('iframe').map((index,item) => {
            if($(item).attr('src')){
                return($(item).attr('src'))
            }
        }).get()
        for(let i = 0;i < l.length;i++){
            todos.push({ id:l[i],video:JSON.parse(await this.get(l[i]))})
        }
        return todos;
    }

    public async WithVideoToken(uri:string):Promise<video>{
        return JSON.parse(await this.get(uri))
    } 

    private async get(uri:string){
        const url = await axios.get(uri);
        const $ = cheerio.load(url.data);
        const i:Object | any = $('script')[0].children[0].data?.replace('var VIDEO_CONFIG =','')
        return i
    }
}   

export default new Blogger()