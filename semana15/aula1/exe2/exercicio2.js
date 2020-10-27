const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operation) {
    case "add": 
        const addResult = Number((num1 + num2))
        return console.log(`Resposta ${addResult}`)

    case "sub":
        const subResult = (num1 - num2)
        return console.log(`Resposta ${subResult}`)

    case "mult":
        const multResult = (num1 * num2)
        return console.log(`Resposta ${multResult}`)

    case "div":
        const divResult = (num1 / num2)
        return console.log(`Resposta ${divResult}`)

}