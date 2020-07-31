/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 const carta1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
 const carta2 = comprarCarta()
 const carta3 = comprarCarta()
 const carta4 = comprarCarta()
    
   //  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   //  console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
alert("Bem vindo ao jogo Blackjack")
console.log("Bem vindo ao jogo Blackjack")
if(confirm("Você quer jogar?")) {
   let soma1 = carta1.valor + carta2.valor
   console.log("Usuário com cartas:", carta1.texto, carta2.texto, "Pontuação:", soma1)
   let soma2 = carta3.valor + carta4.valor
   console.log("Computador com cartas:", carta3.texto, carta4.texto, "Pontuação:", soma2)
   if(soma1 > soma2){
      console.log("Usuario Ganhou")
   }else if(soma1 < soma2){
      console.log("Computador ganhou")
   }else if(soma1 === soma2){
      console.log("Empate")
   }else{
      console.log("erro");
   }

} else {
   
   alert("Game over")
   console.log("O jogo acabou")
   
}