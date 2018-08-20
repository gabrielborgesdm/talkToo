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
    <body onload="acionaFuncao()">
        <div class="container-fluid">
            <section class="row justify-content-around mt-3">

                <div class="col-sm-5 divCont my-3 " id="mensagem">
                    <div class="row justify-content-around" id="mensagemNome">
                        <h1>Lucas</h1><h1>Joao</h1>
                    </div>
                    <div class="row mx-2 px-2" id="mensagemCampo">
                        texto<br/>
                        texto<br/>
                        texto<br/>
                        texto<br/>
                    </div>
                    <form id="formMensagem" class="formBottom">

                        <div class="form-row  justify-content-around ">
                           <input type="text" class="form-control col-9"  placeholder="Digite sua mensagem"  id="textoMensagem" />
                           <input type="button" class="col-2 btn btn-dark" onclick="enviaMensagem()" value="Go!" />
                        </div>
                    </form>
                </div>

                <div class="col-sm-5  divCont text-center my-3" id="resto">

                    <h1>Jõao está online</h1>

                    <form id="formCadastraPlayer" class="formBottom">
                        <p class="h5">Cadastre-se:</p>
                        <div class="form-row  justify-content-around ">
                           <input type="text" class="form-control col-9"  placeholder="Digite seu apelido"  id="nomeCadastraPlayer" />
                           <input type="button" class="col-2 btn btn-dark" onclick="cadastraPlayer()" value="Go!" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </body>
</html>
