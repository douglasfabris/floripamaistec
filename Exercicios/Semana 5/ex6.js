let arrayFrutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];
let i = 0;

arrayFrutas.forEach(element => {
    localStorage.setItem(`fruta${i}`, element);
    i++;
});