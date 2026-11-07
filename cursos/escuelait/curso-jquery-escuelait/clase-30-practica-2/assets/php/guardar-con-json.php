<?php
sleep(2);

$nombre = isset($_REQUEST["nombre"]) ? (string) $_REQUEST["nombre"] : "";
$email = isset($_REQUEST["email"]) ? (string) $_REQUEST["email"] : "";
$telefono = isset($_REQUEST["telefono"]) ? (string) $_REQUEST["telefono"] : "";
$direccion = isset($_REQUEST["direccion"]) ? (string) $_REQUEST["direccion"] : "";

$errores = array();

if ($nombre === "") {
    $errores[] = "No has indicado el nombre";
}

if ($email === "") {
    $errores[] = "No has indicado el email";
}

if ($telefono === "") {
    $errores[] = "No has indicado el teléfono";
}

if ($direccion === "") {
    $errores[] = "No has indicado la dirección";
}

if (count($errores) === 0) {
    $respuesta = array("valido" => true);
} else {
    $respuesta = array("valido" => false, "errores" => $errores);
}

header("Content-Type: application/json; charset=utf-8");
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
