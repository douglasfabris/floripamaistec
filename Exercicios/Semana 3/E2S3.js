numero = parseInt(prompt("Digite sua idade"))

if (numero <= 12){
    console.log("Você é criança")
} else if (numero >= 13 && numero <= 17) {
    console.log("Você é adolescente")
} else if (numero >= 18 && numero <= 65) {
    console.log("Você é adulto")
} else {
    console.log("Você é sênio")
}
