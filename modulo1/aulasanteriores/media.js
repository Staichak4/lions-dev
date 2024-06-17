let nota1
let nota2

console.log('determine a nota: ')
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('determine a segunda nota: ')
    
    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        media(nota1, nota2)
        process.exit()
    })
})

function media(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    console.log(`Sua média é ${media}`)
}
