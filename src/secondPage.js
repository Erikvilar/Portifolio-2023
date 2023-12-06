  window.addEventListener('load', function(){
    var us = document.getElementById('us');
    var users = localStorage.getItem("users", JSON.stringify(users));
    var usersArray = JSON.parse(users);

    if(usersArray && usersArray.length >0){

      var lastUser = usersArray[usersArray.length -1];
      var lastUser = lastUser.name;
      us.textContent = lastUser.toUpperCase();
     

    
      document.getElementById('user').textContent = capitalizeFirstLetter(lastUser);

      // Função para capitalizar a primeira letra de uma string
      function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }}




      var ultimoElementoAtivo = 'conteudo1'; // Inicializa com o primeiro elemento

      function mostrarConteudo(id) {
          // Oculta o último elemento ativo
          document.getElementById(ultimoElementoAtivo).classList.remove('ativo');
          document.getElementById(ultimoElementoAtivo).classList.add('inativo');

          // Mostra o novo elemento
          document.getElementById(id).classList.remove('inativo');
          document.getElementById(id).classList.add('ativo');

          // Atualiza o último elemento ativo
          ultimoElementoAtivo = id;
      }

  

   

    
  })