import { baseURL, maxRepositorio } from "/src/js/variaveis.js";


async function getEvento(nomeBuscado){

const eventoURL = `${baseURL}/${nomeBuscado}/events?per_page=${maxRepositorio}`
const resposta  = await fetch(eventoURL)

return await resposta.json()
}

export { getEvento }