let nome
let idade

console.log("Qual seu nome?")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {

    var adulto = 18 - idade

    if (idade < 18) {
        console.log(`${nome}, você é menor de idade, e sera de maior em ${adulto} anos`)
    } else (
        console.log(`${nome}, você é maior de idade`)
    )
} 