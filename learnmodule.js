const http = require('http')

const server = http.createServer((req,res) =>
{
    if(req.url==='/')
    {

        res.end('welcome to metaverse')
    }
    else if(req.url==="/about")
    {

        res.end("welcome to bhuviverse")
    }
    else{

        res.end('<H1>vapas chala ja bemta</H1>')
    }
})
server.listen(5000)
