const infoUsuario= {
   avatarUrl: '',
   name:'',
   bio:'',
   nomeBuscado:'',
   repositorios: [],
   mensagem:'',
   seguidores:'',
   seguindo:'',
   eventos:'',


   setUserInexistente(inexistente){
    this.mensagem = inexistente.message
   },

   setInfo(usuarioGit){
    this.avatarUrl = usuarioGit.avatar_url
    this.name = usuarioGit.name
    this.bio  = usuarioGit.bio
    this.nomeBuscado = usuarioGit.login
    this.seguidores = usuarioGit.followers
    this.seguindo = usuarioGit.following
   },

   setRepositorios(reposi){
    this.repositoriosArray =reposi  
   },

   setEvento(evento){
    this.eventos = evento
   }
}

export { infoUsuario };