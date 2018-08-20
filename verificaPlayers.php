<?php
include "funcoesConexao.php";

$result = listar("usuarios");
$num = mysqli_num_rows($result);

echo $num;