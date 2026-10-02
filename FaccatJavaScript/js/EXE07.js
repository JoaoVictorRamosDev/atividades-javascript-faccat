//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
//mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
//efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
//vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
//vendedor. 
let NumeroCarrosVendidos = Numer(prompt("Digite o numero de carros vendidos: "))
let ValorTotalVendas = Number(prompt("Digite o valor total de suas vendas: "))
let salarioFixo = Number(prompt("Digite o seu salario fixo: "))
let valorRecebidoPorCarroVendido = Number(prompt("Digite o valor recebido por cada carro vendido: "))

let comissaoVendas = ValorTotalVendas * 0.05
let valorSalarioFinal = salarioFixo + (NumeroCarrosVendidos * valorRecebidoPorCarroVendido ) + comissaoVendas

alert ("O valor total recebido é de: " + valorSalarioFinal)