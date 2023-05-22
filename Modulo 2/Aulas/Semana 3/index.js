const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

let formHTML = "";

try {
  formHTML = fs.readFileSync("index.html", "utf-8");
} catch (err) {
  console.log(err);
}

function salvarDados(dados) {
  return querystring.parse(dados);
}

const servidor = http.createServer((req, res) => {
  switch (req.url) {
    case "/form":
      switch (req.method) {
        case "POST":
          let dados = "";
          req.on("data", (data) => {
            dados += data;
          });
          req.on("end", () => {
            console.log("Leitura concluída com sucesso");
            let usuario = salvarDados(dados).nome;
            console.log(usuario);
            res.writeHead(200, {
              "Content-Type": "text/html; charset: utf-8;",
            });
            res.write(`<h1>Seja bem-vindo ${usuario}</h1>`);
            res.end();
          });
          break;
        default:
          res.writeHead(200, { "Content-Type": "text/html; charset: utf-8;" });
          res.end(formHTML);
          break;
      }
      break;
  }
});

servidor.listen(3000);
