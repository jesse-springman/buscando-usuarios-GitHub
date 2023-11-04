
const tela = {
    
 perfilUsuario:  document.querySelector('.dadosPerfil'),

 
    usuarioInexistente(){   
        this.perfilUsuario.innerHTML = "<h3>Esse usuário não existe</h3>"
          },
        


    telaRenderizada(infoUsuario){

            this.perfilUsuario.innerHTML =
          
                        `
                         <a class="fotoUsuario" href="${infoUsuario.avatarUrl}" target="_blank"><img class="img"    src="${infoUsuario.avatarUrl}"></a>

                        <div class="info">
                            <h1 class="nomeUsuario">${infoUsuario.name ?? 'Não possui nome cadastrado'}</h1>
                            <p>${infoUsuario.bio ?? 'Não possui bio cadastrada'}</p>
                            <h3>Seguidores : <strong class="cinza"> ${infoUsuario.seguidores}</strong></h3>
                            <h3>Seguindo : <strong class="cinza">${infoUsuario.seguindo}</strong></h3>
                        </div>`
                    },


    repositoriosADD(infoUsuario){
       
            let repositorioItens = "";
         
           infoUsuario.repositoriosArray.forEach(repo =>{
        
           repositorioItens += 
                 `<li class="itens-list"><a target="_blank" href="${repo.html_url}">${repo.name}</a>

                 <div class="repo-dados">
                   <i class="fa-solid fa-utensils caixa"> ${repo.forks_count}</i>
                   
                   <i class="fa-regular fa-star caixa"> ${repo.stargazers_count}</i>

                   <i class="fa-solid fa-eye caixa">  ${repo.watchers_count}</i>

                  <i class="fa-solid fa-laptop caixa"> ${repo.language ?? 'indefinido'}</i>
                 </div>
                <li>`          
            }) 

                        
             if(infoUsuario.repositoriosArray.length >0){
             
             this.perfilUsuario.innerHTML  += 
                                                 `
                                                 <div>
                                                     <h2>Repositórios</h2>
                                                     <ul class="lista">${repositorioItens}</ul>
                                                </div>`
                                            }                     
           },
 

           

           eventosAdd(infoUsuario){
            
              let tdsEventos = "";

             infoUsuario.eventos.forEach(even =>{
                
             if(even.type === "PushEvent"){
              tdsEventos  += `<li class="evento"><strong>${even.repo.name}</strong> - ${even.payload.commits[0].    message ?? 'sem evento'}</li>`
              } 

             else if(even.type === "CreatEvent"){
                tdsEventos += `<li class="evento"><strong>${even.repo.name}</strong> - ${even.payload.description ??  'sem evento'}</li>`
                 } 
             })

              this.perfilUsuario.innerHTML +=    `
                                                    <div class="cont-eventos">
                                                        <h2>Eventos</h2>
                                                        <ul>${tdsEventos}</ul>
                                                    </div> `
         
   }
}

export {tela}