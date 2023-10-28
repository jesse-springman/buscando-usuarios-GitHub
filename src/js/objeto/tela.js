
const tela = {
    
 perfilUsuario:  document.querySelector('.dadosPerfil'),

 
    usuarioInexistente(){   
        this.perfilUsuario.innerHTML = "<h3>Esse usuário não existe</h3>"
          },
        


    telaRenderizada(infoUsuario){

            this.perfilUsuario.innerHTML =
                     `<div class="dadosPerfil">
                        <img class="fotoUsuario" src="${infoUsuario.avatarUrl}">
                            <div class="info">
                                <h1 class="nomeUsuario">${infoUsuario.name ?? 'Não possui nome cadastrado'}</h1>
                                <p>${infoUsuario.bio ?? 'Não possui bio cadastrada'}</p>
                            </div>
                        </div>` 
                    },


    repositoriosADD(infoUsuario){
       
            let repositorioItens = "";
         
           infoUsuario.repositoriosArray.forEach(repo =>{
            
           repositorioItens += `<li class="itens-list"><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`
            }) 

             if(infoUsuario.repositoriosArray.length >0){
             
             this.perfilUsuario.innerHTML  += 
                                                 `
                                                 <div class="repositorios">
                                                     <h2>Repositórios</h2>
                                                     <ul class="lista">${repositorioItens}</ul>
                                                </div>`
                                            }
           }         
}

export {tela}