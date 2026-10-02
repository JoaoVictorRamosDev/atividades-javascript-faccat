// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
let anoAtual = Number(prompt("Digite o ano atual: "))
let anoNascimento = Number(prompt("Digite seu ano de nascimento: "))
let idade = anoAtual - anoNascimento

if (idade < 16){
    alert("Não pode votar! ")
}

else if (idade >= 16 && idade < 18) {
    alert("O voto é facultativo (opcional)!")
}
else  {
    alert("Você poderá votar (voto obrigatório)!")
}