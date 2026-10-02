//Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
//uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
//aluno é aprovado). Escrever também a média calculada. 
let avaliacao1 = Number(prompt("Digite nota da primeira avaliação: "))
let avaliacao2 = Number(prompt("Digite nota da segunda avaliação: "))

let media = (avaliacao1 + avaliacao2) / 2
if (media >= 6){
    alert("voce foi aprovado com a média de " + media)
}
else{
    alert("voce foi reprovado com a média de " + media)
}

