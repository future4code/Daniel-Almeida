import axios from "axios"

const URL_ADDRESS = "https://viacep.com.br/ws"

type address = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}

export async function getAddress(cep: number): Promise<address> {

    const result = await axios.get(`${URL_ADDRESS}/${cep}/json`)
    console.log(result)
    return{ 
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }

}