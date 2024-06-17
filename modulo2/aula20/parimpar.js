var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0

for (let i = 0; i <= 999; i++) {
    if (i % 2 == 0 ) {
        somaPares += i
        totalPares ++
    } else { 
        somaImpares += i 
        totalImpares ++
    }

}

var mediaPares = somaPares / totalPares
var mediaImpares = somaImpares / totalImpares

console.log(`a soma dos pares é ${somaPares} \n a soma dos impares é ${somaImpares} \n o total dos pares é ${totalPares} \n o total dos impares é ${totalImpares}`)

if (mediaPares > mediaImpares) {
    console.log(`A média dos pares: ${mediaPares}, é maior que a dos impares: ${mediaImpares}`)
}
if (mediaPares < mediaImpares) {
    console.log(`A media dos impares: ${mediaImpares}, é maior que a dos pares: ${mediaPares}`)
} else {
    console.log('As médias são iguais')
}

