var mensagemNome;
var mensagemCampo;
var formMensagem;

var infoMembro;
var encerrarConversa;
var formCadastra;

function acionaFuncao(){
    funcaoVerificacao();
    setInterval("funcaoVerificacao()",3000);
}

function funcaoVerificacao(){
    mensagemNome = document.getElementById('mensagemNome');
    mensagemCampo = document.getElementById('mensagemCampo');
    formMensagem = document.getElementsByName('formMensagem');

    infoMembro = document.getElementById("infoMembro");
    encerrarConversa = document.getElementById("encerrarConversa");
    formCadastra = document.getElementsByName('formCadastra');
    num = verificaPlayer();
    if(num == 0){
        montaZeroPlayer();
    }else if(num == 1){
        montaUmPlayer();
    }else{
        montaDoisPlayer();
    }

}

function verificaPlayer(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            num = this.responseText;
            if(num == null){
                num = 0;
            }
        }
    };
    xhttp.open("GET", "verificaPlayer.php", false);
    xhttp.send();

    return num;
}

function montaZeroPlayer(){

    mensagemNome.innerHTML = "<h2>Não há membros online</h2>";
    mensagemCampo.innerHTML = "";
    formMensagem[0][0].disabled = true;
    infoMembro.innerHTML = "Não há membros online";
    encerrarConversa.style.display = "none";
    formCadastra[0].style.display = "block";
}

function montaUmPlayer(){

    onlines = resgataNomePlayer();
    mensagemNome.innerHTML = "<h2>" + onlines[0] +"</h2>";
    mensagemCampo.innerHTML = "";
    formMensagem[0][0].disabled = true;
    infoMembro.innerHTML = "<h2>" + onlines[0] +" está online</h2>";
    encerrarConversa.style.display = "none";
    formCadastra[0].style.display = "block";

}

function montaDoisPlayer(){

    onlines = resgataNomePlayer();
    nomes = "";
    for(i = 0; i < onlines.length; i++){
        nomes += "<h2>" + onlines[i] +"</h2>";
    }
    mensagemNome.innerHTML = nomes;

    mensagemCampo.innerHTML = "tem texto";
    formMensagem[0][0].disabled = false;
    infoMembro.innerHTML = "<h2>Usuários estão online</h2>";
    encerrarConversa.style.display = "block";
    formCadastra[0].style.display = "none";

}


function resgataNomePlayer(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            onlines = this.responseText;

            onlines = onlines.split(";");
        }
    };
    xhttp.open("GET", "resgataNomePlayer.php", false);
    xhttp.send();

    return onlines;
}


function cadastraPlayer(){
  nome = formCadastra[0][0].value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          num = this.responseText;
      }
  };
  nome = "?nome=" + nome;
  xhttp.open("GET", "cadastraPlayer.php" + nome, true);
  xhttp.send();

  funcaoVerificacao();
  formCadastra[0][0].value = "";
}
