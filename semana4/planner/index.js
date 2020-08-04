function salvar() {
    const tarefa = document.getElementById('tarefa')
    const dias = document.getElementById('dias-semana')
    let dia = dias.value
    console.log(tarefa.value)
    console.log(dia)
    if (tarefa.value !== ""){
        if (dia === "domingo"){
            const domingo = document.getElementById('domingo')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        if (dia === "segunda"){
            const domingo = document.getElementById('segunda')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        if (dia === "terca"){
            const domingo = document.getElementById('terca')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        if (dia === "quarta"){
            const domingo = document.getElementById('quarta')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        if (dia === "quinta"){
            const domingo = document.getElementById('quinta')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        if (dia === "sexta"){
            const domingo = document.getElementById('sexta')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        if (dia === "sabado"){
            const domingo = document.getElementById('sabado')
            domingo.innerHTML += `<p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p>`
        }
        tarefa.value = ""
    }
    
} 

