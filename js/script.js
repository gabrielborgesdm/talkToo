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
    mensagem = document.getElementById("mensagem");
    mensagemNome = document.getElementById('mensagemNome');
    mensagemCampo = document.getElementById('mensagemCampo');
    formMensagem = document.getElementsByName('formMensagem');

    info = document.getElementById("info");
    infoUsuario = document.getElementById("infoUsuario");
    encerrarConversa = document.getElementById("encerrarConversa");
    formCadastra = document.getElementsByName("formCadastra");

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
        }
    };
    xhttp.open("GET", "verificaOnlines.php", false);
    xhttp.send();
    return num;
}

/*Funções que constroem a página de acordo com o número de pessoas onlines*/
function montaZeroUsuario(){
    mensagem.style.display = "none";
    infoUsuario.innerHTML = "<p class='h4'>Não há usuários onlines!</p>";
    info.style.display = "block";
}

function montaUmUsuario(){
    onlines = resgataNomeUsuarios();

    if(onlines[0] == nome){
        onlines[0] = "Você";
        encerrarConversa.style.display = "block";
        mensagemNome.innerHTML = "<h3>" + onlines[0] +"</h3>";
        mensagemCampo.innerHTML = "<p class='lead text-center text-dark'>Esperando por outro usuário!</p>";
        formMensagem[0][0].placeholder = "Esperando por alguém...";
        formMensagem[0][0].readOnly = true;
        info.style.display = "none";
        mensagem.style.display = "block";
    }else{
        mensagem.style.display = "none";
        info.style.display = "block";
        infoUsuario.innerHTML = "<p class='h4'>" + onlines[0] + " está online!</p>";
    }

}

function montaDoisUsuario(){
    onlines = resgataNomeUsuarios();
    nomes = "";
    for(i = 0; i < onlines.length; i++){
        if(onlines[i] == nome){
            nomes += '<h3 class="order-last">Você</h3>';
        }else{
            nomes += '<h3>' + onlines[i] +"</h3>";
        }
    }
    mensagemNome.innerHTML = nomes;
    formMensagem[0][0].readOnly = false;
    formMensagem[0][0].placeholder = "Digite sua mensagem!";
    resgataMensagensUsuarios();
    encerrarConversa.style.display = "block";
    info.style.display = "none";
    mensagem.style.display = "block";
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
            mensagemCampo.scrollTo(0, mensagemCampo.scrollHeight);
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
    formMensagem[0][0].value = "";
    funcaoVerificacao();
    return false;
}

/*Limpa todo o Banco de dados*/
function encerrar(){
    if(id != null){
        var xhttp = new XMLHttpRequest();
        montaGet = "?id=" + id;
        xhttp.open("GET", "encerrar.php" + montaGet, false);
        xhttp.send();
    }else{
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "encerrar.php", false);
        xhttp.send();
    }

    funcaoVerificacao();
}
