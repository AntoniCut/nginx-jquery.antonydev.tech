<?php
sleep(4);

if (strlen(trim($_POST["nombre"])) < 5) {
    $respuesta = array("valido" => false, "mensaje" => "Error de validación");
} else {
    $respuesta = array("valido" => true, "mensaje" => "gracias " . $_POST["nombre"]);
}

echo json_encode($respuesta);
