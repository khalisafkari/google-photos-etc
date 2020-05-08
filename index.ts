export { default as Blogger } from './src/Blogger';
export { default as GPhotos } from './src/GPhotos';
export { default as Solidfiles }  from './src/Solidfiles';


// Blogger.WithBlogger('https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html')
// .then((resuls) => {
//     console.log(resuls)
// }).catch((error) => {
//     console.log(error)
// })

// Blogger.WithVideoToken('https://www.blogger.com/video.g?token=AD6v5dyQXUjqRayoSfBIT3qk5lxWIjHZfaVrQbwohxdEXTw2ulOd9Dt7mrxZOyhuVoYBPUATpbeo9uZDqkCmVkzKsS2LYmzHXjsZRKEjDzK7OgNVKJBm59j_LJUE2djMywWz2JDQ-us')
// .then((results) => {
//     console.log(results)
// })


// GPhotos
// .get('https://photos.google.com/share/AF1QipMTEPAiVF8t0YqLukflnOSQjwfd8ARIoT2h37AXvYO1uaWodbeiFoBUDuD_19tEbg/photo/AF1QipPA2Bq0JlAR9LoGD3mogsxSb9OZWEG4XqBDD4Rv?key=cjhUT0xrZjM5NGN2SVRLOVptZU5SMUlKV0lQYWpB')
// .then((results) => {
//     const todos = []
//     for(let i = 0;i < results.length;i++){
//         if(results[i]._res === "medium"){
//            todos.push(results[i])
//         }
//     }
//     console.log(todos)
// })

// Solidfiles.get('http://www.solidfiles.com/v/aZKjvxnDmk3NX').then((resuls) => {
//     console.log(resuls)
// })