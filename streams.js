const fs = require('fs');

const readStream = fs.createReadStream('./docs/streams.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/streamsBlog.txt')

// чтение и сохранение больших фаилов вариант 1
// readStream.on('data', chunk => {
//     console.log('-------New Chunk-------');
//     console.log(chunk);
//     writeStream.write('\nNew CHunk\n')
//     writeStream.write(chunk)
// })

// чтение и сохранение больших фаилов вариант 2
 readStream.pipe(writeStream)