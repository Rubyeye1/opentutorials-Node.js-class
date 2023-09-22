var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을  url이라는 변수를 통해서 사용한다

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(queryData.id); // querydata는 객체인데 여기서 id를 통해서 내가 원하는 ex) HTML,Javascript 등등의 값을 뽑을수있다! (구글검색으로 알아낸 것)
 
});
app.listen(3000);