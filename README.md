#### khalis

[![Build Status](https://kutt.it/q7fNdL)](https://travis-ci.org/khalisafkari/khalis)

> Grab blogger streaming link
   ****
   **Leaguage** :  node

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

   //localhost mode cloudvideo.tv
   `http://localhost:3000/cloudvideo?url=https://cloudvideo.tv/42xcdwiwamlh`

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
> ![](https://i.imgur.com/pcZh2yn.png)


## Note 
 > json mode no longer uses the www.blogger.com url but the url of your blog