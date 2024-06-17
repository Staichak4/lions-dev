function calculadora(numero1, numero2, operacao) {
    if (operacao == '+') {
        let soma = numero1 + numero2
        return soma
    } else if (operacao == '-') {
        let subtracao = numero1 - numero2
        return subtracao
    } else if (operacao == '/') {
        let divisao = numero1 / numero2
        return divisao
    } else if (operacao == '*') {
        let multiplicacao = numero1 * numero2
        return multiplicacao
    } else {
        console.log('O operador que você digitou é invalido')
    }
}

console.log(calculadora(5,5,'+'))
console.log(calculadora(5,5,'-'))
console.log(calculadora(5,5,'/'))
console.log(calculadora(5,5,'*'))

