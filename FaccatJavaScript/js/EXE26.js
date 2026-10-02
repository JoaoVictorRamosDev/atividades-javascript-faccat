//Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
//ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
//dos outros 2 lados.
let A = Number(prompt("Digite o primeiro valor (A): "));
let B = Number(prompt("Digite o segundo valor (B): "));
let C = Number(prompt("Digite o terceiro valor (C): "));

if (A < B + C && B < A + C && C < A + B) {
    alert("Forma um triângulo!");
} else {
    alert("Não forma um triângulo!");
}