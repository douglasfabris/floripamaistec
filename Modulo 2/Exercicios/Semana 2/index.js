const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Teste");
    res.end();
  })
  .listen(3000);
