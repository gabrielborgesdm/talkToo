var mensagemNome;
var mensagemCampo;
var formMensagem;

var infoUsuario;
var encerrarConversa;
var formCadastra;

var num;
var nome;
var id;

/*Define chamada por tempo para a funcaoVerificacao()*/
function acionaFuncao(){
    funcaoVerificacao();
    setInterval("funcaoVerificacao()",3000);
}

/*Atualiza as variaveis  e chama as funções de montar página*/
function funcaoVerificacao(){
    mensagemNome = document.getElementById('mensagemNome');
    mensagemCampo = document.getElementById('mensagemCampo');
    formMensagem = document.getElementsByName('formMensagem');

    infoUsuario = document.getElementById("infoUsuario");
    encerrarConversa = document.getElementById("encerrarConversa");
    formCadastra = document.getElementsByName('formCadastra');

    num = verificaOnlines();
    if(num == 0){
        montaZeroUsuario();
    }else if(num == 1){
        montaUmUsuario();
    }else{
        montaDoisUsuario();
    }
}

/*Verifica o número de usuários online*/
function verificaOnlines(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            num = this.responseText;
            if(num == null){
                num = 0;
            }
        }
    };
    xhttp.open("GET", "verificaOnlines.php", false);
    xhttp.send();
    return num;
}

/*Funções que constroem a página de acordo com o número de pessoas onlines*/
function montaZeroUsuario(){
    mensagemNome.innerHTML = "<h2>Não há usuários online</h2>";
    mensagemCampo.innerHTML = "";
    formMensagem[0][0].disabled = true;
    infoUsuario.innerHTML = "Não há usuários online";
    encerrarConversa.style.display = "none";
    formCadastra[0].style.display = "block";
}

function montaUmUsuario(){
    onlines = resgataNomeUsuarios();
    mensagemNome.innerHTML = "<h2>" + onlines[0] +"</h2>";
    mensagemCampo.innerHTML = "";
    formMensagem[0][0].disabled = true;
    if(onlines[0] == nome){
        onlines[0] = "Você";
    }
    infoUsuario.innerHTML = "<h2>" + onlines[0] +" está online</h2>";
    encerrarConversa.style.display = "none";
    formCadastra[0].style.display = "none";

    if(id == null){
        formCadastra[0].style.display = "block";
    }
}

function montaDoisUsuario(){
    onlines = resgataNomeUsuarios();
    nomes = "";
    for(i = 0; i < onlines.length; i++){
        if(onlines[i] == nome){
            nomes += '<h2 class="order-last">' + onlines[i] +"</h2>";
        }else{
            nomes += '<h2>' + onlines[i] +"</h2>";
        }
    }
    mensagemNome.innerHTML = nomes;
    formMensagem[0][0].disabled = false;
    infoUsuario.innerHTML = "<h2>Usuários estão online</h2>";
    encerrarConversa.style.display = "block";
    formCadastra[0].style.display = "none";

    resgataMensagensUsuarios();
}

/*Funções que resgatam informações do banco de dados*/
function resgataNomeUsuarios(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            onlines = this.responseText;
            onlines = onlines.split(";");
        }
    };
    xhttp.open("GET", "resgataNomeUsuario.php", false);
    xhttp.send();
    return onlines;
}

function resgataIdUsuario(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            id = this.responseText;
        }
    };
    montaGet = "?nome=" + nome;
    xhttp.open("GET", "resgataIdUsuario.php" + montaGet, false);
    xhttp.send();
}

function resgataMensagensUsuarios(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mensagemCampo.innerHTML = this.responseText;
            scrollHere = mensagemCampo.lastElementChild.scrollHeight;

            mensagemCampo.scrollTo(0, scrollHere);
        }
    };
    montaGet = "?id=" + id;
    xhttp.open("GET", "resgataMensagemUsuario.php" + montaGet, true);
    xhttp.send();
}

/*Funções que cadastram os dados enviados pelos Usuários*/
function cadastraUsuario(){
    nome = formCadastra[0][0].value;
    var xhttp = new XMLHttpRequest();
    montaGet = "?nome=" + nome;
    xhttp.open("GET", "cadastraUsuario.php" + montaGet, false);
    xhttp.send();
    funcaoVerificacao();
    resgataIdUsuario();
    formCadastra[0][0].value = "";
    return false;
}

function cadastraMensagem(){
    mensagem = formMensagem[0][0].value;
    var xhttp = new XMLHttpRequest();
    montaGet = "?cod=" + id + "&mensagem=" + mensagem;
    xhttp.open("GET", "cadastraMensagem.php" + montaGet, false);
    xhttp.send();
    funcaoVerificacao();
    formMensagem[0][0].value = "";
    return false;
}

/*Limpa todo o Banco de dados*/
function encerrar(){
    if(id != null){
        var xhttp = new XMLHttpRequest();
        montaGet = "?id=" + id;
        xhttp.open("GET", "encerrar.php" + montaGet, true);
        xhttp.send();
    }else{
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "encerrar.php", true);
        xhttp.send();
    }

    funcaoVerificacao();
}
