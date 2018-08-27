<?php
include "funcoesConexao.php";
$nome = $_GET["nome"];

$sql = "INSERT INTO usuarios(nome) VALUES('".$nome."')";
inserir($sql);

$sql = "SELECT * FROM usuarios WHERE nome = '" . $nome. "' ORDER BY id_usuario DESC";
$result = query($sql);
$result = mysqli_fetch_assoc($result);
echo $result["id_usuario"];