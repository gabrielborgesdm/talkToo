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

                <div class="col-11 col-sm-5 divCont my-3 " id="mensagem" style="display:none;">
                    <div class="row justify-content-around" id="mensagemNome">
                        <h2>&nbsp;</h2>
                    </div>
                    <div class="container" id="mensagemCampo">
                    </div>
                    <span id="encerrarConversa" class="text-light">
                        Deseja encerrar a conversa?
                        <a class="text-warning" onclick="encerrar()">Clique aqui!</a>
                    </span>

                    <form name="formMensagem" onsubmit="cadastraMensagem(); return false;" class="formBottom">
                        <p class="col-12 text-left mb-0">
                            <span id="erroMensagem" class="small text-warning">&nbsp;</span>
                        </p>
                        <div class="form-row justify-content-around ">
                           <input type="text" class="form-control col-9"  placeholder="Digite sua mensagem"  id="textoMensagem" />
                           <input type="submit" class="col-2 btn btn-dark" value="Go!" />
                        </div>
                    </form>
                </div>

                <div class="col-11 col-sm-5  divCont text-center my-3" id="info">
                    <h1>Seja bem vindo ao Talktoo</h1>
                    <div id="infoUsuario" class="my-5"></div>
                    <span id="sla"></span>
                    <form name="formCadastra" onsubmit="cadastraUsuario(); return false" class="formBottom">
                        <p class="h5">Entre com seu nick:</p>
                        <p class="col-12 text-left mb-0">
                            <span id="erroUsuario" class="small text-warning">&nbsp;</span>
                        </p>
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