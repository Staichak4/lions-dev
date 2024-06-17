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
    if (media >= 8) {
        console.log(`Parabéns, você passou com a nota ${media}`)
    } else {
        console.log(`Que pena, você reprovou com a nota ${media}`)
    }
}