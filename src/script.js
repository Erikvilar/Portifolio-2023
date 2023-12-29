
window.addEventListener('load', function () {




    document.getElementById('access').addEventListener('click', function () {
        var email_login = document.getElementById('email_login').value;
        var pwd = document.getElementById('password_login').value;
    
        if (!email_login || !pwd) {
            mostrarAlerta('Login inválido', 'Campos vazios, favor preencher!', 'error', 'Preencher');
        } else if (!stack(email_login, 'email')) {
            mostrarAlerta('Login feito com sucesso', 'Bem-vindo ao sistema ' + email_login.toUpperCase(), 'success', 'Entrar');
        } else if (!stack(email_login, 'email', pwd)) {
            mostrarAlerta("Email ou senha incorretos", "Favor verifique suas credenciais", 'warning', 'OK');
        } else {
            console.log("error");
        }
    });

    /*Função de verificação no localStorage <obj> objetos 
    <coluna> Colunas relacionadas a objetos seja nome ou email ou senha*/
    function stack(obj, coluna,pwd) {
        var users = localStorage.getItem("users");
        users = JSON.parse(users) || [];
        var seEncontrar = false;

        for (var i = 0; i < users.length; i++)
            if (users[i][coluna] == obj && users[i].passwd === pwd) {
                seEncontrar = true;
                break;
            }
        return !seEncontrar
    }





    document.getElementById('formCadastro').addEventListener('submit', function (e) {


        e.preventDefault();
        var name_user = document.getElementById('name_user').value;
        var email_user = document.getElementById('email_user').value;
        var pwd = document.getElementById('passwd').value;
        
    
        // Realizar a verificação do email
        
        if (stack(email_user, 'email')) {
            registerUser(name_user,email_user, pwd)
        } else {
            alertCadastro("Email existente", "use um email diferente de " + email_user)
            return; //encerra o processo de envio

        }



      
        alertCadastro("Cliente Cadastrado", "Bem vindo ao sistema", "success")
        setTimeout(function () {
            location.reload();
        }, 2000);

        var formData = new FormData(this);


        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://formspree.io/f/xayrwpaa');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if(xhr.status === 200){
            console.log('Email criado bem sucedido')
        }
        xhr.send(formData);

    })


 

    function registerUser(name_user, email, pwd) {
        var user = { name:name_user, email:email, passwd:pwd }
        var users = localStorage.getItem("users");

        if (!users) {
            users = [user];
            localStorage.setItem("users", JSON.stringify(users))
        }else{
            users = JSON.parse(users);
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }


 









    var count = 1;
    var login = document.getElementById('Login');
    var cadastro = document.getElementById('cadastro');


    document.getElementById('account').addEventListener('click', function (e) {
        e.preventDefault();


        count++;

        if (count % 2 === 0) {

            this.innerHTML = 'Login';
            displayChange('cadastro');

        } else {
            this.innerHTML = 'Create account';
            displayChange('Login');

        }
    });

    cadastro.style.display = 'none';
    function displayChange(form) {
        if (form === 'Login') {
            event.preventDefault();
            login.style.display = 'block';
            cadastro.style.display = 'none';
        } else {
            login.style.display = 'none'
            cadastro.style.display = 'block';
        }
    }
    function alertCadastro(titulo, texto, icone) {

        Swal.fire({

            title: titulo,
            text: texto,
            icon: icone,
        })
    }

})
function mostrarAlerta(titulo, texto, icone, button, tempoSegundos) {

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
    }).then((result) => {
        if (result.isConfirmed && icone === 'success') {
            window.location.href = 'secondPage.html';
        }
    })
}


