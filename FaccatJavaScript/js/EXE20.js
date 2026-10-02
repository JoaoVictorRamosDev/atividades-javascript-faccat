//Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
//escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
//ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
let numeroConta = Number(prompt("Digite o numero da conta: "))
let saldo = Number(prompt("Digite o valor do saldo: "))
let debito = Number(prompt("Digite o valor de debito: "))
let credito = Number(prompt("Digite o valor de credito: "))
let saldoAtual = (saldo - debito) + credito
if (saldoAtual >= 0){
    alert("Saldo Positivo!o seu saldo atual é de: " + saldoAtual)
}
else {
    alert("Saldo negativo! o seu saldo atual é de: " + saldoAtual)
}