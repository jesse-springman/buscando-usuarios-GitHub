import { baseURL, maxRepositorio } from "/src/js/variaveis.js";

async function getRepositorio(nomeBuscado){

    const urlRepos = `${baseURL}/${nomeBuscado}/repos?per_page=${maxRepositorio}` ;
  
    const respostaRespos = await fetch(urlRepos);
  
    return await respostaRespos.json(); 
  }

  export {getRepositorio};