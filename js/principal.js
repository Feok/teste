var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
console.log(peso); // obter peso
console.log(altura); // obter altura

var tdImc = paciente.querySelector(".info-imc");
var imcDaLinha = tdImc.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if(peso < 0 || peso > 1000) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura < 0 || altura > 3.0) {
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválido";
}

if(alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
}
