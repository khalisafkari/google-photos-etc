import axios from "axios";
import cheerio from "cheerio";

export default  async (url: string): Promise<{ source: undefined | string }> => {
    try {
        const fetch = await axios.get(url);
        const $ = cheerio.load(fetch.data);
        const item: any = $('body > script').eq(5).html()?.match(/\bhttps?:\/\/[^,\s()<>]+/gi);
        let source: string | undefined = undefined;
        for (let i = 0;i < item.length;i++) {
           const result: string = item[i];
           if (result.indexOf('video-downloads') != -1) {
               source = result
           }
        }
        return {
            source
        };
    } catch (e) {
        return e;
    }
}
