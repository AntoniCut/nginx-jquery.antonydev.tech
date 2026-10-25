/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-accordion-icons.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/01-accordion/03-accordion-icons.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `acordeón con iconos propios` */
    const $acordeon = $("#accordion");

    //  -----  usar flechas circulares en las cabeceras  -----
    $acordeon.accordion({
        icons: {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s",
        },
    });

});
