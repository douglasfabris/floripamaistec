const express = require("express");
const app = express();
const rotas = require("./routes");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use(rotas);

app.listen(port, () => {
  console.log(`Server aberto na porta ${port}`);
});
