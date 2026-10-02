//Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
//final é:
//                  n1 * 2 + n2 * 3 + n3 * 5 
//mediafinal = -----------------------------------
//                              10 
let valorNota1 = Number(prompt("Digite o valor da primeira nota: "))
let valorNota2 = Number(prompt("Digite o valor da segunda nota: "))
let valorNota3 = Number(prompt("Digite o valor da terceira nota: "))

mediafinal = ((valorNota1 * 2) + (valorNota2 * 3) + (valorNota3 * 5)) / 10

alert("O valor da sua media é: " + mediafinal)
