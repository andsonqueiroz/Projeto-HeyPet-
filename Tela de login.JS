function logar(){
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;

    if( login == "admin" && senha == "admin" && email == "123@admin"){
        alert("Sucesso");
        location.href = "Entrar.html";
    }else{
        alert("Erro ao cadastrar")
    }
}

function direcionar1(){
    location.href = "Entrar.html";
}
function direcionar2(){
    location.href = "Login veterinario.html";
}