//Ler dois valores e imprimir uma das três mensagens a seguir: 
//‘Números iguais’, caso os números sejam iguais 
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
//‘Segundo maior’, caso o segundo seja maior que o primeiro. 
let valor1 = Number(prompt("Digite o primeiro valor : "));
let valor2 = Number(prompt("Digite o segundo valor : "));
if (valor1 == valor2){
    alert("Valores iguais")
}else if (valor1 > valor2){
    alert("Primeiro valor é maior que o segundo valor")
}else {
    alert("Segundo valor é maior que o primeiro valor")
}