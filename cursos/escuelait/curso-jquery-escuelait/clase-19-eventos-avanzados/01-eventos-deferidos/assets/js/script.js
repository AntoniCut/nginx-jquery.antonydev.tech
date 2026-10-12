/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-19-eventos-avanzados/01-eventos-deferidos/assets/js/script.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
*/



//  -----  arrancar cuando el documento está listo  -----
$(() => {

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLElement>} - `lateral que delega los clicks` */
    const $lateral = $("#lateral");

    /** @type {JQuery<HTMLButtonElement>} - `botón que añade un bloque` */
    const $boton = /** @type {JQuery<HTMLButtonElement>} */ (
        $("button")
    );


    //  -----  delegar el click de .estos en el lateral  -----
    $lateral.on("click", ".estos", (evento) => {

        /** @type {JQuery<HTMLElement>} - `bloque pulsado` */
        const $bloque = /** @type {JQuery<HTMLElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  sustituir el texto del bloque pulsado  -----
        $bloque.text("hola hiciste click");
    });


    //  -----  al pulsar el botón, añadir otro bloque  -----
    $boton.on("click", () => {

        /** @type {JQuery<HTMLDivElement>} - `bloque nuevo dentro del lateral` */
        const $nuevo = /** @type {JQuery<HTMLDivElement>} */ (
            $("<div>")
        );

        //  -----  escribir el texto, marcar la clase y añadirlo  -----
        $nuevo.text("algo").addClass("estos").appendTo($lateral);
    });

});
