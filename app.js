 var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(callBackBlockingConcept());
      res.write("callback non blocking");
      // res.write(callBackNonBlockingConcept());
      res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

    function plus(a, b){
    	return a+b;
    }

    /*
    * Function
    */

    function say(word) {
    	console.log(word);
    }

    function execute(someFunction, value) {
    	someFunction(value);
    }

 console.log(plus(10,12));
 console.log(execute(say, "xin chao"));


 /*
 * Thuc hien cong viec doc xong roi moi lam cong viec tiep theo
 */
 function callBackBlockingConcept(){
    var fs = require('fs');
    var data = fs.readFileSync('README.md');

    return data.toString();
 }
