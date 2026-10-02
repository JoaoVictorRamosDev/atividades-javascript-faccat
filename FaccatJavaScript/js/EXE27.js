//Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
let timeA = prompt("Digite o nome do primeiro time (A): "); 
let golsA = Number(prompt("Digite a quantidade de gols do time (A): "));
let timeB = prompt("Digite o nome do segundo time (B): "); 
let golsB = Number(prompt("Digite a quantidade de gols do time (B): "));

if (golsA > golsB) {
    alert(timeA + " ganhou! Com " + golsA + " gols do time " + timeB );
} else if (golsB > golsA) {
    alert(timeB + " ganhou! Com " + golsB + " gols do time " + timeA );
} else {
    alert("EMPATE");
}