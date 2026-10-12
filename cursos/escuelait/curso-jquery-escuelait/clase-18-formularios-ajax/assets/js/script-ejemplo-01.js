/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script-ejemplo-01.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-18-formularios-ajax/assets/js/script-ejemplo-01.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLElement>} - `contenedor de la respuesta` */
    const $resultado = $("#resultado");


    /**
     * ------------------------
     * -----  `datos {}`  -----
     * ------------------------
     * - `campos enviados por POST`
     */
    const datos = {
        /** - `primer valor de prueba` */
        dato: "valor cusdfsdfsd rtertrtxccsdf",
        /** - `segundo valor de prueba` */
        dato2: "valor2",
    };


    //  -----  enviar los datos y mostrar la respuesta  -----
    $.post("../assets/php/pag.php", datos, (respuesta) => {

        //  -----  pintar el html devuelto por el servidor  -----
        $resultado.html(String(respuesta));
    });

});
