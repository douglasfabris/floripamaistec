document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = () => {
        const numero1 = document.querySelector("#number1").value;
        const numero2 = document.querySelector("#number2").value;
        if (numero1 > numero2){
            document.querySelector('#texto').innerHTML = `O número ${numero1} é maior`
        } else if (numero2 > numero1) {
            document.querySelector('#texto').innerHTML = `O número ${numero2} é maior`
        } else {
            document.querySelector('#texto').innerHTML = `Os números são iguais`
        }
        return false
}
});