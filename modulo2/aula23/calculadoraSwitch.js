function calculadora(numero1, numero2, calculo) {
    switch (calculo) {
        case '+':
            return numero1 + numero2
        case '-':
            return numero1 -  numero2
        case '/':
            return numero1 / numero2
        case '*':
            return numero1 * numero2
        default:
            console.log('O operador que você digitou é invalido')
        break
    }
}

console.log(calculadora(5,5,'+'))
console.log(calculadora(5,5,'-'))
console.log(calculadora(5,5,'/'))
console.log(calculadora(5,5,'*'))
console.log(calculadora(5,5,'^'))


