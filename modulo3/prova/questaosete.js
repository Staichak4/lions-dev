var notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
var soma = 0

for(let i = 0; i < notas.length; i++) {
   soma = soma + notas[i]
}
var media = soma / notas.length

let notaMax = notas[0]
let notaMin = notas[0]

for(let i = 0; i < notas.length; i++) {
    if (notas[i] > notaMax) {
        notaMax = notas[i]
    } else if (notas[i] < notaMin) {
        notaMin = notas[i]
    }
}

let notaAcima = 0
let notaAbaixo = 0

for(let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        notaAcima++
    } else if (notas[i] < media) {
        notaAbaixo++
    }
} 

notas.push(8.0)
console.log(notas)
console.log(`existem ${notaAbaixo} notas abaixo da média e ${notaAcima} acima da mèdia`)
console.log(`a maior nota é ${notaMax} e a menor nota é ${notaMin}`)
console.log(`a media das notas é ${media}`)