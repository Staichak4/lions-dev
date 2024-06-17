console.log('Seja bem vindo ao jogo!')
const readline = require('readline')
let numeroTentativas = 0
let maximoTentativas = 10
let numeroAleatorio = Math.floor(Math.random() * 100 + 1)

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function jogar() {
console.log(`O número de tentativas necessárias foi ${numeroTentativas++}`)

rl.question('Digite um número: ', (resposta) => {
console.log(`Você digitou: ${resposta}`)

if(numeroTentativas == maximoTentativas) {
    console.log(`Seu número de jogadas acabou! Game over. O número correto era ${numeroAleatorio}`)
    rl.close()
} else {
    switch (true) {
        case resposta < numeroAleatorio:
            console.log('Muito baixo!')
            jogar()
            break;
        case resposta > numeroAleatorio:
            console.log('Muito alto!')
            jogar()
            break;
        case resposta == numeroAleatorio:
            console.log('Parabéns, você ganhou!!!')
            rl.close()
            break;
        default:
            console.log('Informação inválida, tente novamente.')
            jogar()
            break;
}}
})
}

jogar()