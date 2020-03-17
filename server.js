const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, resp)=>{
    resp.statusCode = 200;
    resp.setHeader('Content-Type','text/plain');
    resp.end('Ola ... \n First script');
})

server.listen(port, host, ()=> {
    console.log(`Server running at http://${host}:${port
}`)
})
