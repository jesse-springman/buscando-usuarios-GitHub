import { baseURL } from "/src/js/variaveis.js";

async function getUsuario(nomeBuscado){

    const url = `${baseURL}/${nomeBuscado}` ;
  
    const resposta = await fetch(url);
  
    return await resposta.json(); 
  }
  
  export{getUsuario};