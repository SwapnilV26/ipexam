// var buf = new Buffer(15);
// buf.write("Swapnil Vishwakarma")
// var en = buf.toString('utf-8')
// console.log(en)

var fs = require('fs')
var readStream = fs.createReadStream('hello.txt', 'utf-8')
var data = '';
readStream.on('data', function (chunk) {
    console.log('-----------------------------------------------------')
    data += chunk;
    // console.log(chunk);
})
readStream.on('end', function (chunk) {
    console.log(data)
    console.log('------------------End-----------------------------')
})

data = " Sample text ";
const writeStream = fs.createWriteStream("hello2.txt");
writeStream.write(data, "UTF8");
writeStream.end()
writeStream.on("finish", () => {
    console.log("Finished writing");
});
writeStream.on("error", (error) => {
    console.log(error.stack);
});
