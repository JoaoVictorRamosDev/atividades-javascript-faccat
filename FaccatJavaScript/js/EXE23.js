//Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
let valor3 = Number(prompt("Digite o terceiro valor: "));

if (valor1 > valor2 && valor1 > valor3) {
    alert(valor1 + " é o maior número");
} else if (valor2 > valor1 && valor2 > valor3) {
    alert(valor2 + " é o maior número");
} else {

    alert(valor3 + " é o maior número");
}