import cheerio from 'cheerio';
import axios from 'axios';

class Solidfiles {
    public async get(uri:string){
        const url = await axios.get(uri);
        return JSON.parse(this.parse(url.data))
    }
    
    private parse($:any):any{
        const item = cheerio.load($)('body > script:nth-child(16)').html()?.replace("angular.module('sf.viewer').constant('viewerOptions', ","").replace(");",'');
        return item
    }
}

export default new Solidfiles()