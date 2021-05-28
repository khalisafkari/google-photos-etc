import axios from "axios";
import cheerio from "cheerio";

export default async (url: string) => {
    if (!url) {
       throw new Error('cannot valid url')
    }
    try {
        const fetch = await axios.get(url)
        const $ = cheerio.load(fetch.data);
        const list = $('.tbl1 td a').map((index, elemenent) => {
            return {
                resolution: $(elemenent).text(),
                source: $(elemenent).attr('onclick')?.replace('download_video(','').replace(')','').replace(/'/gi,'').split(',')
            }
        }).get();

        const listItem = []

        for(let i = 0;i < list.length;i++) {
            listItem.push({
                resolution: list[i].resolution,
                source: await getSource({
                    id: list[i].source[0],
                    mode: list[i].source[1],
                    hash:list[i].source[2]
                })
            })
        }

        return listItem;

    } catch (e) {
        return e;
    }
}

const getSource = async ({ id, mode, hash }:{ id: string, mode: string, hash: string }) => {
    try {
        const fetch = await axios.get(`https://sbembed1.com/dl?op=download_orig&id=${id}&mode=${mode}&hash=${hash}`)
        const $ = cheerio.load(fetch.data);
        return $('span a').attr('href')
    } catch(e) {
        return e;
    }
}