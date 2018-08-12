<?php
function configDB(){
	$db = Array(
	"host" => "localhost",
	"name" => "chat_online",
	"user" => "root",
	"password" => "root"
	);
    $con = mysqli_connect($db['host'],$db['user'],$db['password'],$db['name']);
	
	if(!$con){
		echo"erro";
		die();
	}else{
        mysqli_set_charset($con,"utf8");
		return $con;
	}
}

