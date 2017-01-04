var http = require('http');
var util = require('util');
var url = require('url');
var os = require('os');

var server = http.createServer();

server.on('request', function(req, res){
	var reqUrl = url.parse(req.url,true);
	res.writeHead(200, {'Content-Type': 'text/html'});
	var content = "";
	if(reqUrl.pathname === '/') {
        content += "<html>";
        content += "<head>";
        content += "<title>Hello, World!</title>";
        content += "</head>";
        content += "<body>";
        content += "<p><a href='/osinfo'>OS Info</a></p>";
        content += "</body>";
        content += "</html>";
    } else if (reqUrl.pathname === '/osinfo') {
        content += "<html>";
        content += "<head>";
        content += "<title>Operating System Info</title>";
        content += "</head>";
        content += "<body>";
        content += "<h1>Operating System Info</h1>";
        content += "<table>";
        content += "<tr><th>TMP Directory</th><td>" + os.tmpDir() + "</td></tr>";
        content += "<tr><th>Host Name</th><td>" + os.hostname() + "</td></tr>";
        content += "<tr><th>OS Type</th><td>" + os.type() + " " + os.platform() + " " + os.arch() + "</td></tr>";
        content += "<tr><th>Memory</th><td>total: " + os.totalmem() + ", free: " + os.freemem() + "</td></tr>"; 
        content += "<tr><th>Release</th><td>"+ os.release() +" Type: "+ os.type()+ "</td></tr>"; 
        content += "</table>";
        content += "</body>";
        content += "</html>";
    }
	res.end(content);
	console.log(os);
});

server.listen(8124);
console.log('Listening to http://127.0.0.1:8124');