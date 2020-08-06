despesas = []

function salvar() {
    let valor = document.getElementById('valor').value
    valor = Number(valor)
    const tipo = document.getElementById('tipo').value
    const descricao = document.getElementById('descricao').value
    
    if (valor <= 0){
        alert('Digite um numero')
    }
    
    const despesa = {
        valor: valor,
        tipo: tipo,
        descricao: descricao
    }
    despesas.push(despesa)
    console.log(despesas)

    document.getElementById('valor').value = ""
    document.getElementById('tipo').value = ""
    document.getElementById('descricao').value = ""

    const lista = document.getElementById('lista')
    lista.innerHTML += `<p>${descricao} - ${tipo} - RS ${valor}</p>`

    const valores = despesas.map((valor, index, array) => {
        return valor.valor
    })
    console.log(valores)
    let total = 0
    for (let i = 0; i < valores.length; i++)
    total += valores[i]

    console.log(total)
    const extrato = document.getElementById('extrato')
    extrato.innerHTML = `RS ${total}`



}

// function filtrar() {
//     const tipos = document.getElementById('tipos').value
//     if (tipos === 'casa'){
//         const casa = casa.map((casa, index,array) =>{
//             if (casa.tipo)
//         })
//     }
    
// }
