let cafe
let gostaDeCafe

console.log('Voce gosta de café?')
process.stdin.once('data', function(data) {
    cafe = data.toString().trim()
    processamento(cafe)
    process.exit()
})

function processamento(cafe) {
    if (cafe == 'sim') {
        gostaDeCafe = true
    } else {
        gostaDeCafe = false
    }
    if (gostaDeCafe == true) { 
        console.log('Voce gosta de café, parabens!')
    } else {
        console.log('Voce nao gosta de café, que pena!')
    }
}