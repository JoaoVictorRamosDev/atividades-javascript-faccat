//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
let anos = Number(prompt("Digite os anos:"));
let meses = Number(prompt("Digite os meses:"));
let dias = Number(prompt("Digite os dias:"));

let idadeEmDias = (anos * 365) + (meses * 30) + dias;

alert("A idade total em dias é: " + idadeEmDias);