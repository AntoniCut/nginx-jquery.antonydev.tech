<?php
sleep(4);

$respuesta = array(
    "valido" => false,
    "mensaje" => "Error de validación",
    "errores" => array(
        "nombre" => "Nombre invalido",
        "email" => "Email invalido"
    )
);

echo json_encode($respuesta);
