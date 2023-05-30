function getDaysOfTheMonth(month, year = 2023) {
  const dataInicial = new Date(year, month, 1);
  if (!dataInicial.valueOf()) {
    return false;
  }
  const dias = [];
  while (dataInicial.getUTCMonth() === month) {
    let diaAtual = new Date(dataInicial);
    let dataFormatada =
      diaAtual.getDate() +
      "/" +
      diaAtual.getMonth() +
      "/" +
      diaAtual.getFullYear();
    dias.push(dataFormatada);
    dataInicial.setUTCDate(dataInicial.getUTCDate() + 1);
  }
  return dias;
}

module.exports = getDaysOfTheMonth;
