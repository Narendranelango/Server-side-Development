const express=require('express'),
    http=require('http');
const hostname='localhost';
const port= 3000;

const app=express();
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));//__dirname specifies 
        //the name of the root directory which in this case is public 

app.use((req,res,next)=>{
  console.log(req.headers);
  res.statusCode=200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>Hello Naren!!</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});