const http = require('http'); 
const server = http.createServer((req, res) => {
    res.end('<h1>Hello Node!!!!</h1>\n');
});
server.listen(process.env.PORT || 8000);


