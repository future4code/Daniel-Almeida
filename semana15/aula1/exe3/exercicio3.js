let tarefas = ["Lavar a louça"]
const tarefa = process.argv[2]

tarefas.push(tarefa)
console.log("Tarefa adicionada com sucesso! \n")
console.log("Tarefas:",tarefas)