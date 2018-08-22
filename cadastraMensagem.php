<?php
include "funcoesConexao.php";

$cod = $_GET["cod"];
$mensagem = $_GET["mensagem"];

$sql = "INSERT INTO mensagens(cod_usuario, mensagem) VALUES('".$cod."', '".$mensagem."')";

inserir($sql);
