<?php
include "funcoesConexao.php";
$nome = $_GET["nome"];
$sql = "INSERT INTO usuarios(nome) VALUES('".$nome."')";
inserir($sql);
