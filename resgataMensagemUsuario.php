<?php
include "funcoesConexao.php";
$id = $_GET["id"];

$sql = "SELECT * FROM view_mensagens ORDER BY id_mensagem ASC";
$result = query($sql);
$mensagens = "";

if($result != null){
    while ($row = mysqli_fetch_assoc($result)) {
        if($id == $row["cod_usuario"]){
            $mensagens .=
            '<div class="my-1 text-right">' .
                  '<span>' . 'Você disse: </span><br/>' .
                $row["mensagem"] .
            '</div>';
        }else{
            $mensagens .=
            '<div class="my-1 text-left">' .
                '<span>' . $row["nome"] . ' disse: </span><br/>' .
                $row["mensagem"] .
            '</div>';
        }
    }
}

echo $mensagens;
