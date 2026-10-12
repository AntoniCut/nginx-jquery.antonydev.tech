/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-18-formularios-ajax/ejemplo-02/assets/js/script.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLFormElement>} - `formulario de envío` */
    const $formulario = $("#f1");

    /** @type {JQuery<HTMLElement>} - `contenedor de la respuesta` */
    const $resultado = $("#resultado");


    //  -----  enviar el formulario por ajax  -----
    $formulario.on("submit", (event) => {

        //  -----  evitar el envío nativo del navegador  -----
        event.preventDefault();

        /** @type {string} - `url del action del formulario` */
        const url = String($formulario.attr("action"));

        /** @type {string} - `campos serializados` */
        const datos = $formulario.serialize();

        //  -----  publicar los datos y mostrar la respuesta  -----
        $.post(url, datos, (
            /** @type {string} - `html devuelto por enviar-01.php` */
            respuesta
        ) => {

            //  -----  pintar el html devuelto por el servidor  -----
            $resultado.html(respuesta);
        });
    });

});
