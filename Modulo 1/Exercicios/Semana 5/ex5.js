let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayQuadrados = [];

let quadrado = (num) => {
    return num ** 2;
}

arrayQuadrados = arrayNumeros.map(quadrado);
console.log(arrayQuadrados);