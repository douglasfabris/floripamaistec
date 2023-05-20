const http = require("http");
const fs = require("fs");

function lerJson() {
  fs.readFile("dados.json", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    const dados = JSON.parse(data);
    return dados;
  });
}

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        // Lógica do GET
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
