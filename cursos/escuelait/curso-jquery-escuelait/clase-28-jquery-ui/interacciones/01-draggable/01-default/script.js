/*
    *  ----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/interacciones/draggable/default/script.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja que se puede arrastrar */
    const $draggable = $("#draggable");

    //  -----  activar el arrastre con las opciones por defecto  -----
    $draggable.draggable();

});
