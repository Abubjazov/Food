<?php
$_POST = json_decode(fale_get_contents("php://input"), true);
echo var_dump($_POST);
