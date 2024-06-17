let nota

console.log('Qual sua média?')
process.stdin.once('data', function(data) {
    nota = parseInt(data.toString().trim())
    calculoNotas(nota)
    switch (true) {
        case (calculoNotas(nota) == 'A'):
            console.log('Você foi aprovado com a nota A')
            break
        case (calculoNotas(nota) == 'B'):
            console.log('Você foi aprovado com a nota B')
            break
        case (calculoNotas(nota) == 'C'):
            console.log('Você foi aprovado com a nota C')
            break
        case (calculoNotas(nota) == 'D'):
            console.log('Você foi reprovado com a nota D')
            break
        case (calculoNotas(nota) == 'F'):
            console.log('Você foi reprovado com a nota F')
            
    }
    process.exit()
})


function calculoNotas(nota) {
    switch (true) {
        case (nota >= 90 && nota <= 100):
            return 'A';
        case (nota >= 80 && nota <= 89):
            return 'B';
        case (nota >= 70 && nota <= 79):
            return 'C';
        case (nota >= 60 && nota <= 69):
            return 'D';
        case (nota >= 0 && nota <= 59):
             return 'F';
        default: 
            console.log('Nota invalida')
            break;
    }
}


