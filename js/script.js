var formulario = '';


function acionaFuncao(){
    setInterval("funcaoVerificacao()",3000);
}

function funcaoVerificacao(){
   /*
   if(num == 0){
       montaZeroPlayers();
   }else if (num == 1) {

   }
   */
}

function verificaPlayer(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            num = this.responseText;
        }
    };
    xhttp.open("GET", "verificaPlayers.php", false);
    xhttp.send();

    return num;
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

function montaZeroPlayer(){
    playersZero = '<h1>Ainda não há ninguém online</h1> ' + formulario;
    document.getElementById("usuarios").innerHTML = playersZero;
}

function montaUmPlayer(){
    online = resgataNomePlayer();
    document.getElementById("conversaUsuario").innerHTML = online[0];

    html = "<h4>" + online[0] + " está online</h4>";
    html += formulario;
    document.getElementById("resto").innerHTML = html;

}

function cadastraPlayer(){
  nome = document.getElementById("nomeCadastraPlayer").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          num = this.responseText;
      }
  };
  nome = "?nome=" + nome;
  xhttp.open("GET", "cadastraPlayer.php" + nome, true);
  xhttp.send();
}
