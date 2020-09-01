const {people} = require('./module');

const fs = require('fs');

// read files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err) console.log(err);
//     console.log(data.toString());
// })

// write files
// fs.writeFileSync('./docs/blog1.txt', 'hello world111', () => {
//     console.log(data);
// })

// directories files
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) console.log(11, err);
//         console.log('Folder created');
//     })
// } else {
//     
// }

// fs.rmdir('./assets', (err) => {
//     console.log(err);
// })

// delete files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) console.log(err);
        console.log('file delete');
    })
}