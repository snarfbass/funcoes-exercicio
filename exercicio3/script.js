/*# Exercício 3


a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.*/

function somar(num1, num2){
    let soma = num1 + numero2
    return soma
}

function sub(num1, num2){
    let soma = num1 - numero2
    return sub
}

function multiplicar (num1, num2){
    let mult = num1 * numero2
    return mult
}

function dividir (num1, num2){
    let div = num1 / numero2
    return div
}

console.log(somar(11,9), sub(9,8), multiplicar(10,10), dividir(5,5))
console.log(somar(inserirNum, inserirNum2, sub(inserirNum, inserirNum2), multiplicar(inserirNum,inserirNum2),dividir (inserirNum,inserirNum2)))


const inserirNum = Number(prompt("insira um numero"))
const inserirNum2 = Number(prompt("insira um numero"))
console.log(inserirNum, inserirNum2)

const receberSoma = somar(inserirNum, inserirNum2)
const receberSub = sub(inserirNum, inserirNum2)
const receberMult = multiplicar(inserirNum, inserirNum2)
const receberDiv = dividir(inserirNum, inserirNum2)

console.log(receberSoma, receberSub, receberMult, receberDiv)







