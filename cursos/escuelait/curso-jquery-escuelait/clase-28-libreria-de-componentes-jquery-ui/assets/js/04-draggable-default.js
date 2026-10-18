/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-draggable-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/04-draggable-default.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja que se puede arrastrar */
    const $draggable = $("#draggable");

    //  -----  activar el arrastre con las opciones por defecto  -----
    $draggable.draggable();

});
