const http = require("http");
const fs = require("fs");

function lerJson() {
  try {
    const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"));
    return dados;
  } catch (err) {
    console.log(err);
  }
}

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        // Lógica do GET
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Teste");
        console.log(lerJson());
        res.end();
        break;
      case "POST":
        // lógica do POST
        break;
    }
  })
  .listen(3000);
