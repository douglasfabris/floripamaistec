let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayImpares = [];

let isImpar = (num) => {
    return num % 2;
}

arrayImpares = arrayNumeros.filter(isImpar);
console.log(arrayImpares)