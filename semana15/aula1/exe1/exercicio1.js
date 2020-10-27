const name = process.argv[2]
const age = Number(process.argv[3])

console.log("\033[34m", `Olá, ${name}! Você tem ${age} anos.`)

console.log("\033[33m", `Olá, ${name}! Você tem ${age} anos. Em sente anos você terá ${age+7}`)
