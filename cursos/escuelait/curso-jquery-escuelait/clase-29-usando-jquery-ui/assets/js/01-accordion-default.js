/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-accordion-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/01-accordion-default.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `acordeón de la demo` */
    const $acordeon = $("#accordion");

    //  -----  abrir el primer panel y cerrar los demás al pulsar una cabecera  -----
    $acordeon.accordion();

});
