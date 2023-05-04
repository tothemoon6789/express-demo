const http = require('http')
http.createServer((req,res) => {
    res.write('Setup bang nodejs, module http') 
    res.end()
}).listen(6060)