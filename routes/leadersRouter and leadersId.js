const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());



leadersRouter.route('/')
.all((req,res,next) => {        //app.get('/dishes', (req,res,next) => {(Previous One)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();//Points to the next '/' , i.e. to the next path.
})
.get((req,res,next) => {
    res.end('Leaders information is added');
})
.post((req, res, next) => {
    res.end('Leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leadersRouter.route('/:leadersId')
.get((req,res,next) => {
    res.end('Leaders information is added');
})
.post((req, res, next) => {
    res.end('Leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});
module.exports = leadersRouter;