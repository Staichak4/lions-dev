let nota1
let nota2
let notas = []

console.log('diga a primeira nota:')
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('diga a segunda nota:')
    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
})

function processamento(nota1, nota2) {
    notas.push(nota1, nota2)
    var media = (notas[0] + notas[1]) / 2
    console.log(`sua média é ${media}`)
}