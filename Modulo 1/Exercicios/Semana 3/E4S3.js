numero = parseInt(prompt("Digite o valor da venda em R$"))

if (numero < 10000){
    console.log("Bronze")
} else if (numero < 100000) {
    console.log("Prata")
} else if (numero < 500000) {
    console.log("Ouro")
} else {
    console.log("Platinum")
}
