const express = require('express');
const bodyParser = require('body-parser');

const dishIdRouter = express.Router();

dishIdRouter.use(bodyParser.json());



dishIdRouter.route('/')
.all((req,res,next) => {        //app.get('/dishes', (req,res,next) => {(Previous One)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();//Points to the next '/' , i.e. to the next path.
})
.get((req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
    res.end('POST operation not supported on /disheId/'+ req.params.dishId);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Dish ID PUT operation not supported on /disheId');
})
.delete((req, res, next) => {
    res.end('Dish ID Deleting all dishes');
});

module.exports = dishIdRouter;