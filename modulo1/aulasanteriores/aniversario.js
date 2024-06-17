let nome 
let idade 
const ano = 2024
let aniversario 

console.log('Qual seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('Você já fez aniversário?')

        process.stdin.once('data', function(data) {
            aniversario = data.toString().trim()
            processamento(nome, idade, aniversario)
            process.exit()
        })
    })
}) 

function processamento(nome, idade, aniversario) {
let anoDeNascimento = ano - idade
if (aniversario == 'sim') { 
     aniversario = true
} else {
    aniversario = false 
}


 if (aniversario) {
    console.log(`${nome} você nasceu no ano de ${anoDeNascimento}`)
 } else (
    console.log(`${nome} você nasceu no ano de ${anoDeNascimento - 1}`)
 )
}