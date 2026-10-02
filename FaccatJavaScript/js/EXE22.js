//Ler um valor e escrever se é positivo, negativo ou zero
let valor = Number(prompt("Digite um valor: "))

if (valor > 0){
    alert("o valor " + valor + " é positivo")
}
else if (valor == 0){
    alert("o valor " + valor + " é ZERO")
}
else {
    alert("o valor " + valor + " é negativo")
}