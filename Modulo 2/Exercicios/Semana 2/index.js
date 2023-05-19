const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Teste");
        res.end();
        break;
      case "POST":
        // lógica do POST
        break;
    }
  })
  .listen(3000);
