import axios from "axios";
import cheerio from "cheerio";

interface source {
    thumbnail: string;
    iframe_id: string;
    allow_resize: boolean;
    streams: Array<{
        play_url: string;
        format_id: number;
    }>
}

interface list {
    id: string;
    source: source;
}

export const getBlogList = async (url: string): Promise<list[]> => {
   try {
       const fetch = await axios.get(url);
       const $ = cheerio.load(fetch.data);
       const list: any[] = [];
       $('iframe').each(async (index, element) => {
           const item = $(element).attr('src');
           if (item) {
               list.push({
                   id: item,
               })
           }
       })

       for (let i = 0;i < list.length;i++) {
           list[i].source = await getSourceVideo(list[i].id)
       }

       return list;

   } catch (e) {
       return e;
   }
}

export const getSourceVideo = async (url: string | any): Promise<Promise<source> | undefined> => {
    try {
        const fetch = await axios.get(url);
        const $ = cheerio.load(fetch.data);
        const data = $('script').html()?.trim();
        return  JSON.parse(<string>data?.replace('var VIDEO_CONFIG = ', ''))
    } catch (e) {
        return e;
    }
}
