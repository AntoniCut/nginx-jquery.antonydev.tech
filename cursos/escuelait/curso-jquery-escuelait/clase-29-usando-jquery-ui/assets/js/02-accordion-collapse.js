/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-accordion-collapse.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-accordion-collapse.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `acordeón que admite cerrarse por completo` */
    const $acordeon = $("#accordion");

    //  -----  permitir cerrar el panel que está abierto  -----
    $acordeon.accordion({
        collapsible: true,
    });

});
