//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
//escreva o custo total da compra.  
let macasCompradas = Number(prompt("Digite a quantidade de maças compradas: "))
if (macasCompradas < 12) {
    valorTotal = macasCompradas * 1.30
}else {
     valorTotal = macasCompradas * 1.00
}
alert("o valor final  das maças compradas foi de: " + valorTotal)


