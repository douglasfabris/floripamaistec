function githubAPI() {
  fetch("https://api.github.com/users/Bruno-Costa-fig")
    .then((dados) => dados.json())
    .then((dados) => console.log(dados));
}
