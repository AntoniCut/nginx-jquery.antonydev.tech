/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  05-accordion-no-auto-height.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/01-accordion/05-accordion-no-auto-height.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `acordeón con la altura de cada panel` */
    const $acordeon = $("#accordion");

    //  -----  dejar que cada panel use la altura de su contenido  -----
    $acordeon.accordion({
        heightStyle: "content",
    });

});
