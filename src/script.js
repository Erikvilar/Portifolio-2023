

document.getElementById('btn').addEventListener('click', function(){
    var name_user = document.getElementById('name')
    var pwd = document.getElementById('passwd')
    
    if(!name_user.value || !pwd.value){
       mostrarAlerta('Login invalido','Campos vazio favor preencha!','error','Preencher')
    
    }else{
        registerUser(name_user.value, pwd.value);
        mostrarAlerta('Login feito com sucesso','Bem vindo ao sistema '+name_user.value.toUpperCase(),'success','Entrar')
    }
   
});
/*implementado um local storage*/ 



function registerUser(name_user, pwd){
    var user ={name:name_user, passwd:pwd}
    var users = localStorage.getItem("users");
    if(!users){
        users = [user];
        localStorage.setItem("users",JSON.stringify(users))
    }else if(FixCallStack(users)){
        users = JSON.parse(users);
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        
    }
}


function FixCallStack(user) {
    var users = localStorage.getItem("users");
   users = JSON.parse(users);
    var seEncontrar = false;
    for (i=0; i<users.length; i++)
        if (users[i].nome == user) {
            found = true;
            break;
        }
    return !seEncontrar
}
/*A "call stack" (pilha de chamadas) em JavaScript é uma estrutura de dados que 
gerencia a execução de funções no seu código. Ela opera de maneira semelhante a 
uma pilha na vida real, onde os elementos são adicionados e removidos na parte superior.
Cada vez que uma função é chamada, um novo quadro de pilha é empilhado no topo, 
representando a execução dessa função. Quando a função é concluída, seu quadro é 
removido da pilha.

Quando você executa um script em JavaScript, o interpretador JavaScript 
(como o V8 no Chrome, SpiderMonkey no Firefox, ou o motor JavaScript no Node.js) 
utiliza a pilha de 
chamadas para rastrear a execução das funções. 
Isso é importante para entender a ordem das chamadas de funções e para saber 
para onde retornar após a conclusão de uma função.*/ 


/*Funcionalidades do sistema*/ 

function mostrarAlerta(titulo, texto,icone,button, tempoSegundos) {
   
    Swal.fire({
       
      title: titulo,
      text: texto,
      icon: icone, 
      confirmButtonColor: '#5FBDFF',
      confirmButtonText: button,
      timer: tempoSegundos,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    }).then((result)=>{
        if(result.isConfirmed && icone === 'success'){
            window.location.href='secondPage.html'
        }
    })
}

