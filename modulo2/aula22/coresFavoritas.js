let coresFavoritas = ['preto','azul','verde']
let coresEspeciais = []
let corDoUsuario 

console.log('Qual sua cor favorita?')
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})

function processamento(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)) {
        console.log("Sua cor favorita é uma das favoritas da turma!")
    } else {
        console.log('Sua cor é diferente, vamos adicionar à lista!')
        coresEspeciais.push(corDoUsuario)
    }
    console.log(`As cores favoritas são: ${coresFavoritas} e as cores especiais são: ${coresEspeciais}, ao todo, temos ${coresFavoritas.length} cores favoritas.`)
}
