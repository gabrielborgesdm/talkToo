<?php
include "funcoesConexao.php";

$result = listar("usuarios");

$players = Array();

while ($r = mysqli_fetch_assoc($result)){
  array_push($players, $r["nome"]);
}

$var = "";
$count = count($players);

for ($i=0; $i < $count; $i++) {
  if ($i != 0) {
    $var .= ";" . $players[$i];
  }else{
    $var .= $players[$i];
  }
}

echo $var;
