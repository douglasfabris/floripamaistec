
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nota1 = parseFloat(document.querySelector("#nota1").value);
    let nota2 = parseFloat(document.querySelector("#nota2").value);
    let nota3 = parseFloat(document.querySelector("#nota3").value);
    let media = (nota1 + nota2 + nota3)/3
    console.log("A média é " + media);
});
