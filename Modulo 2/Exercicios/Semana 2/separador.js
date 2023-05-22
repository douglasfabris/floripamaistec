function separadorDeNumeros(arrayDeNumeros, opcao) {
  let impar = arrayDeNumeros.filter((num) => num % 2 === 1);
  let par = arrayDeNumeros.filter((num) => num % 2 === 0);
  switch (opcao) {
    case 1:
      return impar;
    case 2:
      return par;
    case 3:
      let obj = { impar: [], par: [] };
      obj.impar.push(impar);
      obj.par.push(par);
      return obj;
    default:
      console.log("Opcao invalida");
  }
}

module.exports = separadorDeNumeros;
