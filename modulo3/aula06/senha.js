let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let senha = ''
let tamanhoSenha 
let numeroAleatorio

console.log('qual o tamanho da sua senha?')
process.stdin.once('data', function(data) {
    tamanhoSenha = parseInt(data.toString().trim())
    processamento(tamanhoSenha)
    process.exit() 
})

function processamento(tamanhoSenha) {
    for (let i = 0; i < tamanhoSenha; i++) {
        numeroAleatorio = Math.floor(Math.random() * caracteres.length + 1)
        senha += caracteres.charAt(numeroAleatorio)
    }

console.log(senha)
}

// Staichaka e Assunção