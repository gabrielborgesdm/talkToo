<?php
include "funcoesConexao.php";

if(!empty($_GET)){
    $id = $_GET["id"];
    $where = array('id_usuario', $id);
    truncar("mensagens");
    deletar("usuarios", $where);
}else{
    truncar("usuarios");
    truncar("mensagens");
}
