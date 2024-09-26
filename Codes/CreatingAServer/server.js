const http = require("node:http"); // or simply http

const server = http.createServer( (req,res)=>{
    if(req.url==="/getSecretData"){
        res.end("There is no secret Data Guys,Chill!...");
    }
    else 
    res.end("Hello to my Server Guys!...");
} );

server.listen(7777);

/*
note when we use the http to create server it is toooo lengthy and it is low level language 
so we use express.js which is a wrapper or a node.js web application framework 

*/