//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.


let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

let percentualBrancos = (votosBrancos * 100) / totalEleitores;
let percentualNulos = (votosNulos * 100) / totalEleitores;
let percentualValidos = (votosValidos * 100) / totalEleitores;

alert("Percentual de votos brancos: " + percentualBrancos + "%");
alert("Percentual de votos nulos: " + percentualNulos + "%");
alert("Percentual de votos válidos: " + percentualValidos + "%");