const http = require("http");
const fs = require("fs");

function lerJson() {
  try {
    const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"));
    return JSON.stringify(dados.produtos);
  } catch (err) {
    console.log(err);
  }
}

function cadastrarProduto(produto) {
  try {
    const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"));
    dados.produtos.push(JSON.parse(produto));
    fs.writeFileSync("dados.json", JSON.stringify(dados));
    console.log("Cadastro realizado com sucesso");
  } catch (err) {
    console.log(err);
  }
}

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(lerJson());
        break;
      case "POST":
        let produto = "";
        req.on("data", (chunk) => {
          produto += chunk;
        });
        req.on("end", () => {
          res.writeHead(200, { "Content-Type": "text/plain; charset: utf-8;" });
          res.end(cadastrarProduto(produto));
        });
        break;
    }
  })
  .listen(3000);
