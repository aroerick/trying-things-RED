const request = require('request')
const fs = require('fs')
const rp = require('request-promise')
// const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
// const albumsUrl = 'https://jsonplaceholder.typicode.com/albums'

// request(postUrl, function (error, response, body){
//     console.log(JSON.parse(body).slice(0, 10))
//     request(albumUrl, function (error, response, body){
//         console.log(JSON.parse(body).slice(0, 20))
//         console.log('DONE!')
//     })
// })
// rp (postUrl)
//     .then(res => console.log(res))
//     .then(() => rp(albumUrl))
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

// getPromise(postsUrl)
//     .then(res => console.log(res.slice(0, 10)))
//     .then(() => getPromise(albumUrl))
//     .then(res => {
//         console.log(res.slice(0, 20))
//         console.log('Done!')})
//     .catch(error => console.log(error))

// function getPromise(url) { 
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             if (error)
//                 reject(error)
//             resolve(JSON.parse(body))
//         })
//     })
// }

// async function getStuff(){
//     try {
//         const posts = await getPromise(postsUrl)
//         console.log(posts.slice(0, 10))

//         const albums = await getPromise(albumsUrl)
//         console.log(albums.slice(0, 20))

//         console.log('done.')
//     } catch (e) {
//         console.log('nope.')
//     }
// }
// getStuff()

function haikuPromise(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}
async function writeHaiku(){
    try {
        const lineOne = await haikuPromise('./opening.txt')
        console.log(lineOne)

        const lineTwo = await haikuPromise('./middle.txt')
        console.log(lineTwo)

        const lineThree = await haikuPromise('./end.txt')
        console.log(lineThree)
    } catch (e) {
        console.log('nope.')
    }
}
writeHaiku()