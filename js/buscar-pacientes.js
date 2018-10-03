var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erro = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
        
            pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.status);

            erro.classList.add("mensagens-erro");
            erro.classList.remove("invisivel");
        }
        
    });
    
    xhr.send();
});