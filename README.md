#### Multi direct link Streaming & Downloader

[![Build Status](https://travis-ci.org/khalisafkari/google-photos-etc.svg?branch=master)](https://travis-ci.org/khalisafkari/google-photos-etc)

> Grab Blogger & Google Photos, mp4upload.com, cloudvideo.tv, etc streaming link 
   ****
  > **Leaguage** :  node
  
  > **react-native** : [react-native-google-photos](https://github.com/khalisafkari/react-native-google-photos)
   
## TOC
  * [Install](#installation)
  * [Screenshot](#screenshot)
  * [Note](#note)
  * [Donate](#donate)
  * [Support](#support)

## Installation


 1. clone repo
 2. install dep with  **npm i**
 3. run **npm run dev**
 4. JSON Mode  
 ```js 
   // online example blogger 
  `https://khalis-khalis411.now.sh/?url=https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html`

   //localhost mode blogger
   `http://localhost:3000/?url=https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html`

   //online example cloudvideo.tv
  `https://khalis-khalis411.now.sh/cloudvideo?url=https://khalis-khalis411.now.sh/cloudvideo?url=https://cloudvideo.tv/wnjb1hz5ccdd`
  
  //localhost mode cloudvideo.tv
   `http://localhost:3000/cloudvideo?url=  https://khalis-khalis411.now.sh/cloudvideo?url=https://cloudvideo.tv/wnjb1hz5ccdd`

   //online example photos.google.com
   `https://khalis-khalis411.now.sh/photos?url=https://photos.google.com/share/AF1QipMTEPAiVF8t0YqLukflnOSQjwfd8ARIoT2h37AXvYO1uaWodbeiFoBUDuD_19tEbg/photo/AF1QipPA2Bq0JlAR9LoGD3mogsxSb9OZWEG4XqBDD4Rv?key=cjhUT0xrZjM5NGN2SVRLOVptZU5SMUlKV0lQYWpB`

   //localhost mode photos.google.com
   `http://localhost:3000/photos?url=https://photos.google.com/share/AF1QipMTEPAiVF8t0YqLukflnOSQjwfd8ARIoT2h37AXvYO1uaWodbeiFoBUDuD_19tEbg/photo/AF1QipPA2Bq0JlAR9LoGD3mogsxSb9OZWEG4XqBDD4Rv?key=cjhUT0xrZjM5NGN2SVRLOVptZU5SMUlKV0lQYWpB`



 ```
 6. > Video Mode 
 ```js

   // Blogspot require /video/1?url=
   `http://localhost:3000/video/1?url=https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html`

   //www.blogger.com/video.g?token  require /video/2?url=
   `http://localhost:3000/video/2?url=https://www.blogger.com/video.g?token=AD6v5dy6xibQ1EBFaa1lN91Il9qch9W8dAnCVk8uDihtPVLuLwc0TUdSA24IP8gRMKqxIQQgenDZQFQA2pCYwQpH3O1iOKWxVfuapwPd6QIRDVKAtunBuMnh6ALvCUkLXhCqoH4RZ6D_`

   
 ```

## Screenshot

> proxy mode
![](https://i.imgur.com/7TfqEUc.png)

> json mode
> ![](https://i.imgur.com/xETf6I7.png)


## Note 
 > json mode no longer uses the www.blogger.com url but the url of your blog
 
 > if you use react-native follow this repo [react-native-google-photos](https://github.com/khalisafkari/react-native-google-photos)
 
 ## Donate
 * <a href="https://paypal.me/khalisafkari?locale.x=id_ID"><img src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom.png" heigth="50" width="50"/></a>

 ## Available
 
 * [x] Google Photos
 * [x] Blogger.com 
 * [x] Cloudvideo.tv (*Proxy only*)
 * [x] mp4upload.com
 * [x] rapidvideo.com
 * [ ] yourupload.com
   
## Support
   <div>
        <a href="https://www.jetbrains.com/?from=https://github.com/khalisafkari/google-photos-etc"><img src="https://i.ibb.co/jwhfW4j/jetbrains.png" alt="jetbrains" width="100" height="100" border="0"></a>
         <a href="https://kutt.it/2ew2Sx"><img src="https://assets.zeit.co/image/upload/front/assets/design/white-full-logo.png" alt="zeit" width="150" height="100" border="0"></a>
   </div>

