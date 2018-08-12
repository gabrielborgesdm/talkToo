<?php
include "funcoesConexao.php";

$result = listar("usuarios");
$result = mysqli_fetch_assoc($result);
print_r($result);
