// Exercícios 1

// Para ver se o numero é par,
// Imprime o numero par, para os demais imprime o numero impar.

// Exercício 2

// a. O codigo serve para mostrar o preço da fruta

// b. O preço da fruta, maçã é R$, 2.25

// c. Iria imprimir todos os preços.

// Exercicio 3

// a. Pede pro usuario digitar o primeiro numero, guardando numa variavel tipo numberg

// b. A mensagem seria Esse numero passou no teste, se for -10 vai será ignorado 

// c. Sim erro de variavel por que let mensagem está dentro de outro scopo

Exercício 4

a. const idade = Number(prompt("Digite sua idade"))

if (idade > 18) {
    console.log("Usuario pode dirigir")    
}elese{
    console.log("Usuario não pode")
}

// Exercício 5

// let hora = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (hora === "M"){
//     console.log("Bom dia")
// } else if (hora === "V"){
//     console.log("Boa tarde");
// } else if (hora === "N"){
//     console.log("Boa noite");
// }

// switch (hora){
//     case "M":
//         console.log("Bom dia")
//         break
//     case "V":
//         console.log("Boa tarde")
//         break
//     case "N":
//         console.log("Boa noite")

// }

// Exercício 7

// let filme = prompt("qual o gênero de filme que vão assistir?")
// let preco = prompt("qual o preço do ingresso?")


// if (filme === "fantasia" && preco < 15){
//     console.log(Bom filme!)    
// } else {
//     console.log("Escolha outro filme")
// }

Desafio 1

// Exercício 7

// let filme = prompt("qual o gênero de filme que vão assistir?")
// let preco = prompt("qual o preço do ingresso?")


// if (filme === "fantasia" && preco < 15){
//    let snack = prompt("Qual snack vai querer")
//     console.log("Bom filme!", snack)    
// } else {
//     console.log("Escolha outro filme")
// }

Desafio 2

var nomeCompleto = prompt("Qual é seu nome?")
var tipoJogo = prompt("Qual Tipo de jogo: IN indica internacional; e DO indica doméstico")
var etapa = prompt("Qual Tipo de jogo: IN indica internacional; e DO indica doméstico")
var categoria = prompt("- Categoria: pode ser as opções 1, 2, 3 ou 4")
var qtd = prompt("Quantos ingressos")
var valor = XXX


console.log("---Dados da compra---")
console.log("Tipo de jogo", tipoJogo)
console.log("Etapa do jogo", etapa)
console.log("Categoria:", categoria)
console.log("Quantidades de Ingressos:", qtd)
console.log("---Valores---")
if(tipoJogo === "DO"){
    console.log("Valor do ingresso:", valor)
    console.log("Valor total:", valor*qtd)
}else if(tipoJogo === "IN"){
    console.log("Valor do ingresso:", valor*4.10)
    console.log("Valor total:", valor*qtd*4.10)

}


