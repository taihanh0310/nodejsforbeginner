var math = require('./math');
var express = require('express');
var app = express();
app.get('/fibonacci/:n', function(req, res, next) {
    var result = math.fibonacciLoop(req.params.n);
    res.send({
        n: req.params.n,
        res: result
    });
});
app.listen(3002);
console.log('Fibonacci REST service is listening on port 3002');