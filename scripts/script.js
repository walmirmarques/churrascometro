// Carne - 400 gr por pessoa + de 6 horas - 650 gr
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6horas 1500 ml

// crianças valem 0,5

let numAdultos = document.getElementById("adultos").value;
let numCriancas = document.getElementById("criancas").value;
let numDuracao = document.getElementById("duracao").value;


function calculaChurrascometro(){
    let numAdultos = document.getElementById("adultos").value;
    let numCriancas = parseInt(document.getElementById("criancas").value / 2);
    let numDuracao = document.getElementById("duracao").value; 

    let carne;
    let cerveja;
    let refrigerante;

    if (numDuracao >= 0 && numDuracao <= 5) {
        carne = (400 * numAdultos) * numCriancas;
        cerveja = (1200 * numAdultos);
        refrigerante = (1000 * numAdultos) * numCriancas;
    } else {
        carne = (650 * numAdultos) * numCriancas;
        cerveja = (2000 * numAdultos);
        refrigerante = (1500 * numAdultos) * numCriancas;
    }


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> ${carne / 1000} Kilos de carne para o seu churrasco!!! </p>`
    resultado.innerHTML += `<p> ${Math.ceil(cerveja /355)} Latas de cerveja </p>`
    resultado.innerHTML += `<p> ${Math.ceil(refrigerante / 2000)} Litros de Refrigerante ou Água. </p>`
}