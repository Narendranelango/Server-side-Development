const express = require('express');
const bodyParser = require('body-parser');

const promotionsIdRouter = express.Router();

promotionsIdRouter.use(bodyParser.json());



promotionsIdRouter.route('/')
.all((req,res,next) => {        //app.get('/dishes', (req,res,next) => {(Previous One)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();//Points to the next '/' , i.e. to the next path.
})
.get((req,res,next) => {
    res.end('Will send details of the promotion details of : ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
    res.end('POST operation not supported on /promotionsId/'+ req.params.dishId);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Promotions ID PUT operation not supported on /promotionsId');
})
.delete((req, res, next) => {
    res.end('Promotions ID Deleting all dishes');
});

module.exports = promotionsIdRouter;