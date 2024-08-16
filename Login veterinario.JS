function logar(){
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var uf = document.getElementById("uf").value;
    var crmv = document.getElementById("crmv").value;

    if( login == "admin" && senha == "admin" && email == "123@admin" && nome == "ze" && cpf == "111.111.111-11" && uf == "BA" && crmv == "CRMV-BA 12345"){
        alert("Sucesso");
        location.href = "Entrar.html";
    }else{
        alert("Um dos campos está incorreto")
    }
    
}