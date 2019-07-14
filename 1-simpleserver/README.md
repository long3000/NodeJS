## **Simple HTTP web server** using Node.js
Create two files in a project folder such as:  
```
.
└── Simple WebServer
    ├── server.js
    └── server.html
```
Inside **server.html**, we have a boiler code as following"
```html
<html lang='en'>
    <head>
        <meta charset = "UTF-8">
        <meta name="viewport"
                content ="width=device-width, user-scalable=no, initial-cale=1.0, maximum-scale=1.0, minium-scalle=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document<title>
    </head>
    <body>
        <h1>Hello Page!</h1>
    </body>
</html>
```

Inside **server.js**, let's put in our Javascript code as such:
```javascript
const http = require('http');

const hostname = 'localhost';
const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Page</h1>');
}).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
```
Once the file structure and codes have been prepared, open your terminal and navigate to the recently created folder,
```bash
$ node server.js
Server is running at http://localhost:8080
```
.. and followed by opening your brownser to the address and you should be greeted by 

<img src="https://snag.gy/q81fSX.jpg">

**Variable http** 'require' http package, in which **http** contains ***createServer*** function, which responds:
* with code 200 in html header
* print out "Hello Page" in plain text (which is then translated to html by the brownser)