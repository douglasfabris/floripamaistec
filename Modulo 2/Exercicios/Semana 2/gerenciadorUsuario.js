function cadastrar(usuario) {
  const fs = require("fs");
  // const dados = JSON.stringify(usuario);
  fs.readFile("usuarios.json", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    const usuarios = JSON.parse(data);
    if (usuarios.some((el) => el.email === usuario.email)) {
      console.log("Usuário já existente");
      return;
    } else {
      usuarios.push(usuario);
    }
    fs.writeFile("usuarios.json", JSON.stringify(usuarios), (err) => {
      if (err) console.log("Erro no cadastro", err);
      else console.log("Cadastro realizado com sucesso");
    });
  });
}

function login(email, senha) {
  const fs = require("fs");
  fs.readFile("usuarios.json", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    const usuarios = JSON.parse(data);
    if (usuarios.some((el) => el.email === email && el.senha === senha)) {
      console.log("Login realizado com sucesso");
    } else {
      console.log("Usuario e/ou senha inválida");
    }
  });
}

function excluir(email, senha) {
  const fs = require("fs");
  fs.readFile("usuarios.json", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    const usuarios = JSON.parse(data);
    if (usuarios.some((el) => el.email === email && el.senha === senha)) {
      const indice = usuarios.findIndex((el) => el.email === email);
      usuarios.splice(indice, 1);
      fs.writeFile("usuarios.json", JSON.stringify(usuarios), (err) => {
        if (err) console.log("Erro no cadastro", err);
        else console.log("Exclusão realizada com sucesso");
      });
    } else {
      console.log("Usuario e/ou senha inválida");
    }
  });
}

module.exports = { cadastrar, login, excluir };
