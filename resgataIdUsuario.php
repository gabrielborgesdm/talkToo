<?php
include "funcoesConexao.php";
$nome = $_GET["nome"];

$id = listar("usuarios", Array("nome", "$nome"));
$id = mysqli_fetch_assoc($id);
$id = $id["id_usuario"];
echo $id;
