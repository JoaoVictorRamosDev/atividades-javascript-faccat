//Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
let valor3 = Number(prompt("Digite o terceiro valor: "));

if (valor1 < valor2 && valor1 < valor3) {
   
    soma = valor2 + valor3;
    alert("A soma dos maiores é: " + soma);
} else if (valor2 < valor1 && valor2 < valor3) {
   
    soma = valor1 + valor3;
    alert("A soma dos maiores é: " + soma);
} else {
   
    soma = valor1 + valor2;
    alert("A soma dos maiores é: " + soma);
}