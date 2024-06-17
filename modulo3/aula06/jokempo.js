let escolhaUsuario = ''
let escolhaComputador = ''
var opcoes = ['pedra', 'tesoura', 'papel']
let resultado = ''

console.log('qual sua escolha?')
process.stdin.once('data', function(data) {
    escolhaUsuario = data.toString().trim()
    processamento(escolhaUsuario)
    process.exit() 
})

function processamento(escolhaUsuario, escolhaComputador, resultado) {

    escolhaComputador = opcoes[Math.floor(Math.random() * 3)]

    if (escolhaUsuario == escolhaComputador) {
        resultado = 'Empate'
    } else if (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura' ||
               escolhaUsuario == 'tesoura' && escolhaComputador == 'papel' || 
               escolhaUsuario == 'papel' && escolhaComputador == 'pedra')  {
        resultado = 'Você venceu'
    } else {
        resultado = 'Voce perdeu'
    }

console.log(escolhaComputador)
console.log(resultado)
}

// Staichaka e Assunção