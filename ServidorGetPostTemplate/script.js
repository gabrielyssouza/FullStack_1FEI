function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(nome === "" || email === "" || senha === ""){
        alert("Preencha todos os campos!");
        return;
    }

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
}

function logar() {
    let emailLogin = document.getElementById("emailLogin").value;
    let senhaLogin = document.getElementById("senhaLogin").value;

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if(!usuario){
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if(emailLogin === usuario.email && senhaLogin === usuario.senha){
        alert("Login realizado! Bem-vindo(a) " + usuario.nome);
    } else {
        alert("Email ou senha incorretos!");
    }
}