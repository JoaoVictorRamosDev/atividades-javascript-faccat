//A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
//de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
//Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
//o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
//(considere que o mês possua 4 semanas exatas).
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas: "));
let salarioHora = Number(prompt("Digite o seu salário por hora: "));

let limiteHorasNormais = 160;
let salarioTotal; 
if (horasTrabalhadas > limiteHorasNormais) {
    let horasExtras = horasTrabalhadas - limiteHorasNormais;
    let valorHoraExtra = salarioHora * 1.5; 
    salarioTotal = (limiteHorasNormais * salarioHora) + (horasExtras * valorHoraExtra);
} else {
    salarioTotal = horasTrabalhadas * salarioHora; 
}

alert("O salário total do funcionário é de: " + salarioTotal);