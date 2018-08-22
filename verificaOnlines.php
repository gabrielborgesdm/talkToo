<?php
include "funcoesConexao.php";

$result = listar("usuarios");
($result == null) ? $result = 0: $result = mysqli_num_rows($result);

echo $result;
