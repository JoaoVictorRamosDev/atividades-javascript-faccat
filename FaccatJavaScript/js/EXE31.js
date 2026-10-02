//Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
//Até 5 Kg Acima de 5 Kg 
//Morango R$ 2,50 por Kg R$ 2,20 por Kg 
//Maçã R$ 1,80 por Kg R$ 1,50 por Kg 
//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
let kilosMorangos = Number(prompt("Digite a quantidade em (Kgs) de morangos: "));
let kilosMacas = Number(prompt("Digite a quantidade em (Kgs) de maçãs: "));

let precoMorangos, precoMacas;

// Preço dos Morangos
if (kilosMorangos <= 5) {
    precoMorangos = kilosMorangos * 2.50;
} else {
    precoMorangos = kilosMorangos * 2.20;
}

// Preço das Maçãs
if (kilosMacas <= 5) {
    precoMacas = kilosMacas * 1.80; 
} else {
    precoMacas = kilosMacas * 1.50;
}

let valorTotal = precoMorangos + precoMacas;
let pesoTotal = kilosMorangos + kilosMacas;


if (pesoTotal > 8 || valorTotal > 25) {
    valorTotal = valorTotal * 0.90; // Desconto de 10%
}

alert("O valor total a ser pago é: R$ " + valorTotal.toFixed(2));