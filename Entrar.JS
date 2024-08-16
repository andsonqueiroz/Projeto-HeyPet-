function logar(){
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;

    if( login == "admin" && senha == "admin" && email == "123@admin"){
        alert("Sucesso");
        location.href = "feed.html";
    }else{
        alert("Um dos campos está incorreto")
    }
}