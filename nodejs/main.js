var http = require('http');
var fs = require('fs');
var url = require('url'); // 모듈

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData= url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;
    

    console.log(url.parse(_url, true))
    
    if(pathname === '/'){
      if(queryData.id === undefined){
        var title = 'Welcome';
        var description = 'Hello, node.js';
        fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){    // 본문과 타이틀 모두 페이지를 새로고침하는 즉각적으로 반영되서 나타난다!
          var title = 'Welcome';
          var description = 'Hello, node.js';
          var template = ` 
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
        });
      }
      else{
        fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){    // 본문과 타이틀 모두 페이지를 새로고침하는 즉각적으로 반영되서 나타난다!
          var title = queryData.id; 
          var template = ` 
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
        });
      }
      
    }  
    else
    {
     response.writeHead(404);
     response.end('not found');
    }
    
});
app.listen(3000);