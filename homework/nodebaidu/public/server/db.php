<?php
	header("Content-type:application/json; charset=utf-8");

	$user = "root";
	$pass = "asdf7854";
	$url = "localhost";
	$db = "baidunews";
	$link = mysqli_connect($url, $user, $pass, $db);

	if(mysqli_connect_error()){
		printf("Connect failed: %\n", mysqli_connect_error());
		exit();
	}
?>