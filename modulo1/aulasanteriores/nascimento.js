let nome 
let idade 
const ano = 2024

console.log('Qual seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade, ano)
        process.exit()
    })
}) 

function processamento(nome, idade, ano) {
let anoDeNascimento = ano - idade
console.log(`Olá ${nome}, voce nasceu em ${anoDeNascimento}, caso não tenha feito aniversario, vc nasceu em ${anoDeNascimento - 1}`)
}
