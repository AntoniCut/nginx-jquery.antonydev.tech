/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  09-draggable-handle.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/09-draggable-handle.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja que solo se arrastra por el asa */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja que no se arrastra por la cabecera */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLElement>} - Cajas y párrafos de la demo */
    const $seleccionables = $("div, p");

    //  -----  permitir el arrastre solo desde el párrafo  -----
    $draggable.draggable({ handle: "p" });

    //  -----  impedir el arrastre desde la cabecera  -----
    $draggable2.draggable({ cancel: "p.ui-widget-header" });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $seleccionables.disableSelection();

});
