const express=require('express'),
    http=require('http');
const hostname='localhost';
const port= 3000;

const app=express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(morgan('dev'));

const dishRouter=require('./routes/dishRouter')
const dishIdRouter=require('./routes/dishIdRouter')
const promotionsRouter=require('./routes/promotionsRouter')
const promotionsIdRouter=require('./routes/promotionsIdRouter')
const leadersIdRouter=require('./routes/leadersIdRouter')
const leadersRouter=require('./routes/leadersRouter')
app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/dishes/:dishId',dishIdRouter);
app.use('/promotions',promotionsRouter);
app.use('/promotions/:promoId',promotionsIdRouter);
app.use('/leaders',leadersRouter);
app.use('/leaders/:leaderId',leadersIdRouter);


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