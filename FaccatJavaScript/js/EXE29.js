//Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
//até 20 litros, desconto de 3% por litro Álcool acima de 20 litros, desconto de 5% por litro até 20 litros, desconto de 4% por litro Gasolina 
//acima de 20 litros, desconto de 6% por litro. Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da 
//seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

let numeroLitros = Number(prompt("Digite a quantidade de litros: "));
let tipoCombustivel = prompt("Qual o tipo de combustível? Digite A para Álcool ou G para Gasolina: ");
let valorGasolina = 3.30;
let valorAlcool = 2.90;
let valoraPagar;

if (tipoCombustivel === "G" && numeroLitros <= 20) {

    valoraPagar = (valorGasolina * numeroLitros) * 0.96;
} 
else if (tipoCombustivel === "A" && numeroLitros <= 20) {

    valoraPagar = (valorAlcool * numeroLitros) * 0.97;
} 
else if (tipoCombustivel === "G" && numeroLitros > 20) {

    valoraPagar = (valorGasolina * numeroLitros) * 0.94; 
} 
else if (tipoCombustivel === "A" && numeroLitros > 20) {

    valoraPagar = (valorAlcool * numeroLitros) * 0.95; 
} 
else {
    alert("Opção inválida! Digite A ou G.");
}
if (valoraPagar !== undefined) {
    alert("O valor a ser pago pelo cliente é: R$ " + valoraPagar.toFixed(2));
}