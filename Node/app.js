let http = require('http');
let fs = require('fs');
const port = 4000;

http.createServer((req, res)=>{
    res.writeHead(200);
    // res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('hello.txt', function(err, data){
        if(err){
            res.write("File not found")
        }
        else{
            res.write(data)
        }

        return res.end();
    })
}).listen(port, function(err){
    if(err){
        console.log("Something went wrong" + err);
    }else{
        console.log("Server is running on " + port)
    }
})


