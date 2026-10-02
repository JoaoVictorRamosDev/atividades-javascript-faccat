//Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
//quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
//média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
//a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
//compra'. 
let quantidadeAtual = Number(prompt("Digite o valor da quantidade atual: "))
let quantidadeMaxima = Number(prompt("Digite o valor da quantidade Maxima: "))
let quantidadeMinima = Number(prompt("Digite o valor da quantidade Minima: "))
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) /2

if (quantidadeAtual >= quantidadeMedia){
    alert("Não efetuar compra!")
}else {
    alert("Efetuar compra")
}