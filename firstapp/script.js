//constantes
const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000

//input
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento:"))
nome = prompt("Informe o seu nome:")
salarioBase = parseFloat(prompt("Informe o seu salário base:"))
gratificacao = parseFloat(prompt("Informe a sua gratificação:"))
bonus = parseFloat(prompt("Informe o seu bônus:"))
desconto = parseFloat(prompt("Informe o seu desconto:"))
salarioLiquido = 0
adicional = 0

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento

adicional = 1000 //ou 2000

salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

//output
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido + "."
alert(mensagem)
