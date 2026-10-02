//Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
//ultrapassar este valor, calcular e escrever o seu salário total.
let salarioFixo = Number(prompt("Digite seu salário fixo: "));
let vendasEfetuadas = Number(prompt("Digite o valor de vendas efetuadas: "));
let valorTotal; // Declaramos a variável principal no topo

if (vendasEfetuadas <= 1500) {
    let valorComissao = vendasEfetuadas * 0.03;
    valorTotal = salarioFixo + valorComissao;
} else {
    let comissaoAte1500 = 1500 * 0.03;
    let oQuePassou = vendasEfetuadas - 1500;
    let comissaoExtra = oQuePassou * 0.05;
    
    // Calculamos o total direto aqui dentro do else
    valorTotal = salarioFixo + comissaoAte1500 + comissaoExtra;
}

alert("O valor total com as porcentagens é: R$ " + valorTotal);