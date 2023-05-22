function geradorDeSenhas(tamanho) {
  let i = 0;
  let senha = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  while (i < tamanho) {
    senha += characters.charAt(Math.floor(Math.random() * charactersLength));
    i++;
  }
  return senha;
}

module.exports = geradorDeSenhas;
