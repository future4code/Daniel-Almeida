// Interpretação de códigos

// 1. Inseri o valor da contação do dollar cria uma constante meuDinheiro com o valor atribuido dentro da função

// 2. Nesta função pede 2 paramatros o primeiro é o tipo de investimento e o segungo é o valor investido
// cria duas constantes e imprime no console

// 3. Imprime a quantidade de numeros no array, imprime o numero de pares e imprime o numero de impars

// 4. Imprime o numero menor e o outro o maior

// Lógica de programação

// 1. 

// for (let i = 0; i < array.length; i++){}

// for (let objeto of array){}

// array.foreach(function)

//2. a. false b. true c. false d. true e. false

// 3. faltou i++ pra não dar loop infinito

// 4.

// let a, b, c
// if (a === b || a === c || b === c){
//     return console.log("Isóceles")
// } else if(a === b && b === c){
//     return console.log("Equilátero")
// }else {
//     return console.log("Escaleno")
// }

// 5.

// let a = prompt("digite um numero")
// let b = prompt("digite um numero")
// if(a > b){
//     console.log(a, "é maior que", b)
// }else{
//     console.log(b, "é maior que", a)
// }
// if (a % b === 0){
//     console.log(a, "é divisivel por", b)
// } else{
//     console.log( a, "não é divisivel por", b)
// }

// if (b % a === 0){
//     console.log(b, "é divisivel por", a)
// } else{
//     console.log(b, "não é divisivel por", a)
// }

// console.log("A diferença entre eles é", (a - b))

// Exercícios de função

// 1. 

// let array = []
// function addNumerous() {
//     let a = prompt("digite um numero")
//     let b = prompt("digite um numero")
//     let c = prompt("digite um numero")
//     let d = prompt("digite um numero")

//     array.push(a, b, c, d)
    
// }
// addNumerous()

// // 2. 

// const alerta = () => {
//     return alert("Hello Future4")
// }
// alerta()

// Exercicios Objetos

//1. array é um grupo de variaveis ou objetos, objetos são formado por keys e values

// //2. 
// function criarRetangulo(lado1, lado2){
//     return console.log("largura", lado1)
//     return console.log("altura", lado2)
//     return console.log("perimetro", (2 * (lado1 + lado2)))
//     return console.log("area", (lado1 * lado2))
// }

// 3.

// let filme = {
//     titulo: "Star Wars",
//     ano: "1977",
//     diretor: "George Lucas",
//     atores: ["Luke", "Yoda"]
// }
// console.log("Venha assistir o filme", filme.titulo, ", de", filme.ano, "dirigido por", filme.diretor, "estrelando", filme.atores.toString())



// 4.

// const pessoa = [{
//     nome: "daniel",
//     idade: "35",
//     email: "daniel@example.com",
//     endereço: "Padre lafaiete"
// }]

// function anonimizarPessoa(){
//     let anonimo = pessoa.map((name) => ({...name, nome: "anonimo"}))
    
//     console.log(anonimo)
//     console.log(JSON.stringify(anonimo))
// }


// Funções de array

// 1.

// let pessoa = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
// const callback = (adulto, index, array) => {
//     return adulto.idade > 18
// }
// const adultos = pessoa.filter(callback)
// console.log(adultos)
// console.log(pessoa)
// const callback2 = (crianca, index, array) => {
//     return crianca.idade < 18
// }
// const crianca = pessoa.filter(callback2)
// console.log(crianca)

// 2.

// const array = [1, 2, 3, 4, 5, 6]
// let multiplicados = []

// const numeroVezesDois = array.map(numero => numero * 2)


// const numeroVezesTres = array.map(numero => String(numero * 3))

// const sePar = array.map(numero => { 
//     if(numero % 2 === 0){
//     return String(numero + " é par")
//     }else{
//         return String(numero + " é impar")
//     }
// })
// console.log(sePar)

// 3. 

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const callback = (permitido, index, array) => {
//          return permitido.idade > 14 && permitido.altura > 1.5 
// }
// const permite = pessoas.filter(callback)
// console.log(permite)
