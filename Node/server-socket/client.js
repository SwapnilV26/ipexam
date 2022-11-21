const net = require('net');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({ port: 8000 }, () => {
    console.log("Client: I connected to server.");
    client.write("Client: Hello this is Client");
});

client.on('data', (data) => {
    console.log(data.toString());
})

client.on('end', () => {
    console.log('CLIENT: I disconnected from the server.');
})

rl.on('line', (input) => {
    client.write(`CLIENT: ${input}`)
})