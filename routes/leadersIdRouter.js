const express = require('express');
const bodyParser = require('body-parser');

const leadersIdRouter = express.Router();

leadersIdRouter.use(bodyParser.json());



leadersIdRouter.route('/')
.all((req,res,next) => {        //app.get('/dishes', (req,res,next) => {(Previous One)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();//Points to the next '/' , i.e. to the next path.
})
.get((req,res,next) => {
    res.end('Will send details of the Leader details of : ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
    res.end('POST operation not supported on /leadersId/'+ req.params.dishId);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Leaders ID PUT operation not supported on /leadersId');
})
.delete((req, res, next) => {
    res.end('Leaders ID Deleting all dishes');
});

module.exports = leadersIdRouter;