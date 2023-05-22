tamanho = parseFloat(prompt("Digite o tamanho em metros"))
peso = parseFloat(prompt("Digite o peso em kg"))

if (tamanho > 5 || peso > 1500){
    console.log("O carro não pode passar pela ponte")
} else {
    console.log("O carro pode passar")
}
