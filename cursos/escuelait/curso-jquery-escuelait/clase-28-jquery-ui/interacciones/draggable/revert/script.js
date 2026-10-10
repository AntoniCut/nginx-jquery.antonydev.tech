/*
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/interacciones/draggable/revert/script.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja que vuelve a su sitio al soltarla */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja cuyo clon vuelve al soltarlo */
    const $draggable2 = $("#draggable2");

    //  -----  devolver la caja original a su posición  -----
    $draggable.draggable({ revert: true });

    //  -----  devolver el clon a su posición  -----
    $draggable2.draggable({ revert: true, helper: "clone" });

});
