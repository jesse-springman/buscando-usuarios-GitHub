import { getUsuario } from "/src/js/servico/usuario.js";
import {getRepositorio } from "/src/js/servico/repositorio.js";
import { getEvento } from "/src/js/servico/eventos.js";

import { infoUsuario } from "/src/js/objeto/usuario.js";
import { tela } from "/src/js/objeto/tela.js";



  

document.querySelector('.botao').addEventListener('click',()=>{

    const nomeBuscado = document.querySelector('.campo-do-nome').value;

     if (campoVazio(nomeBuscado))return;
    
      gerencimento(nomeBuscado);  
})


function campoVazio(nomeBuscado){
  if(nomeBuscado.length ===0){
    alert('Preencha o campo com o nome de usuário do Github')
    return true
  }
}


document.querySelector('.campo-do-nome').addEventListener('keyup',(e)=>{
  const nomeBuscado = e.target.value
  const key = e.which || e.keyCode
  const numeroTecla = key === 13

  if(campoVazio(nomeBuscado)) return

 
  if(numeroTecla){
    gerencimento(nomeBuscado);
  }
  
})







async function gerencimento(nomeBuscado){
  const respostaUsuario = await getUsuario(nomeBuscado)
  

  if(respostaUsuario.message === "Not Found"){
    tela.usuarioInexistente();
    return
  }

  const respostaRepositorios = await getRepositorio(nomeBuscado)

  const respostaEvento = await getEvento(nomeBuscado)
  

  infoUsuario.setUserInexistente(respostaUsuario)
  infoUsuario.setInfo(respostaUsuario)
  infoUsuario.setRepositorios(respostaRepositorios)
  infoUsuario.setEvento(respostaEvento)

  tela.usuarioInexistente(infoUsuario)
  tela.telaRenderizada(infoUsuario)
  tela.repositoriosADD(infoUsuario)
  tela.eventosAdd(infoUsuario)
}
















