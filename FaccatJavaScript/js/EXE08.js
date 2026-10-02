// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
//correspondente em graus Celsius (baseado na fórmula abaixo): 
// C       F - 32 
// ----=-------------
// 5       9 
//Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F

let fahrenheit = Number(prompt("Digite a temperatura em fahrenheit: "));
let valorEmCelsius = (fahrenheit - 32) * 5 / 9 ;

alert("valor em fahrenheit digitado: " + fahrenheit + " Valor em celsius convertido: " + valorEmCelsius)