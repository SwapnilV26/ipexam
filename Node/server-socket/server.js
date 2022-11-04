const net = require('net');
const server = net.createServer();

server.on("connection", (socket) => {
    console.log("New connection made " + socket.remoteAddress + ":" + socket.remotePort);
    socket.on("data", (data) => {
        console.log(data.toString());
    })
    socket.once("close", () => {
        console.log("Client connection is closed");
    })
    socket.on("error", (err) => {
        console.log(err);
    })
    socket.write("server:Hello connection successfully made.")
})

server.on("error", (err) => {
    if (err === 'EADDINUSE') {
        console.log('Address in use')
        setTimeout(() => {
            server.close()
            server.listen(PORT, HOST)
        }, 1000)
    }else{
        console.log("Server is failed")
    }
})

server.listen(8000, ()=>{
    console.log("Server is runnig on %j", server.address().port)
})