export { default as Solidfiles }  from './src/Solidfiles';
import { getBlogList, getSourceVideo } from './src/Blog';
import GP from './src/GP';
import SB from './src/SB';


/*
    Blogger
    getBlogList: Promise<list[]>
    getSourceVideo: Promise<source>

    Google Photos
    GP: Promise<{ source: string }>

    streamsb.com
    SB: Promise<{ resolution: string, source: string }>
 */

//getBlogList('https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html');
//getSourceVideo('https://www.blogger.com/video.g?token=AD6v5dw27DkFA4pN3A4ym5njnsCfyh0s8spLVR2z2OfXBPSrTIsYZcHSCrpe6GMfmiO5zVxGf2p4ZBwPX6RlX4_ul7yIdQR4Fv8jXSSoKSeJ-4ZJx3sBW4SwQPIogsCMqB4WNNw_vhw')
//GP('https://photos.google.com/share/AF1QipNccwxrdUIfGMkLpt-yA-QxQY7HGqg7_hqIinlPaYxg3rLhZIufTv0qB_fFs4pKYA/photo/AF1QipNRiHEP9DTCQkhhIC1AMah7eMcnm8UN8KTLLW5j?key=TUFuaUtNXzZzdUtsem1iUDNJcFNwbTFqQ3UzWC13')
//SB('https://sbembed1.com/wl8hcnm2ihlr.html').then(console.log)

export {
    getBlogList,
    getSourceVideo,
    GP,
    SB
}
