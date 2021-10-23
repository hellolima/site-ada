document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("tel").value != ""){
        alert("Eba! Você receberá as mensagens por email! ")
    }else{
        alert("Preenche direitinho! ")
    }
}