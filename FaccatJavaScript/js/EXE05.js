// Escreva um algoritmo para ler o salário mensal atual de um fu cionário e o percentual de reajuste.Calcular e escrever o valor do novo salário. 
let salarioMensal = Number(prompt("Digite seu salário mensal: "))
let percentualReajuste = Number (prompt("Digite o percentual de reajuste: "))

let valorReajuste = salarioMensal * (percentualReajuste / 100);
let salarioFinal = (salarioMensal + valorReajuste)
alert("O salario final com reajuste é: " + salarioFinal)
