const infoUsuario= {
   avatarUrl: '',
   name:'',
   bio:'',
   nomeBuscado:'',
   repositorios: [],
   mensagem:'',

   setUserInexistente(inexistente){
    this.mensagem = inexistente.message
   },

   setInfo(usuarioGit){
    this.avatarUrl = usuarioGit.avatar_url
    this.name = usuarioGit.name
    this.bio  = usuarioGit.bio
    this.nomeBuscado = usuarioGit.login
   },

   setRepositorios(reposi){
    this.repositoriosArray =reposi
   }
}

export { infoUsuario };