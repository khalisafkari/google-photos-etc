import axios from 'axios';
import cheerio from 'cheerio';

export type _res = "hd1080" | "hd720" | "medium"

export interface gphotos {
    _id:string
    _res:_res
}

class GPhotos {
    public async get(uri:string):Promise<gphotos[]>{
        const url = await axios.get(uri);
        const $ = `${cheerio.load(url.data)('body').html()}`.split('003d')
        const todos:gphotos[] = []
        for(let i =0;i < $.length;i++){
            if($[i].indexOf('hd1080') != -1){
                todos.push({
                    _id:decodeURIComponent($[1].split('%3Dm')[0]) + '=m37',
                    _res:'hd1080'
                })
            }else if($[i].indexOf('hd720') != -1){
                todos.push({
                    _id:decodeURIComponent($[1].split('%3Dm')[0]) + '=m22',
                    _res:'hd720'
                })
            }else if($[i].indexOf('medium') != -1){
                todos.push({
                    _id:decodeURIComponent($[1].split('%3Dm')[0]) + '=m18',
                    _res:'medium'
                })
            }
        }
        return todos;
    }
}

export default new GPhotos();