var nome = 
console.log('Diga seu nome: ')

process.stdin.on('data', function(data) {
    nome = data.toString()
    console.log('Olá, ' + nome )

    process.exit();
})