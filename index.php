<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>Talk Too</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap-->
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap.min.css" >
        <!--Pessoal-->
        <script src="js/script.js"></script>
        <link type="text/css" rel="stylesheet" href="css/style.css">
    </head>
    <body onload="acionaFuncao()" onbeforeunload="encerrar()">
        <div class="container-fluid">
            <section class="row justify-content-around mt-3">

                <div class="col-sm-5 divCont my-3 " id="mensagem">
                    <div class="row justify-content-around" id="mensagemNome">
                        <h2>&nbsp;</h2>
                    </div>
                    <div class="container" id="mensagemCampo">
                    </div>
                    <form name="formMensagem" onsubmit="cadastraMensagem(); return false;" class="formBottom">
                        <div class="form-row  justify-content-around ">
                           <input type="text" class="form-control col-9"  placeholder="Digite sua mensagem"  id="textoMensagem" />
                           <input type="submit" class="col-2 btn btn-dark" value="Go!" />
                        </div>
                    </form>
                </div>

                <div class="col-sm-5  divCont text-center my-3" id="info">
                    <h1>Informações sobre a conversa:</h1>
                    <h2 id="infoUsuario" class="my-5"></h2>
                    <div id="encerrarConversa" class="lead" style="margin-top:5rem; display:none;">
                        <h3>Deseja encerrar a conversa?</h3>
                        <button onclick="encerrar()" class="btn btn-outline-warning col-4">Clique aqui</button>
                    </div>
                    <span id="sla"></span>
                    <form name="formCadastra" onsubmit="cadastraUsuario(); return false" class="formBottom" style="display:none;">
                        <p class="h5">Cadastre-se:</p>
                        <div class="form-row  justify-content-around ">
                           <input type="text" class="form-control col-9"  placeholder="Digite seu apelido" name="nomeCadastraUsuario" />
                           <input type="submit" class="col-2 btn btn-dark" value="Go!" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </body>
</html>
