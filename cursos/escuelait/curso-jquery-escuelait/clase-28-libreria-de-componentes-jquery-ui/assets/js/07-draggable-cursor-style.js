/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  07-draggable-cursor-style.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/07-draggable-cursor-style.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja con el cursor en el centro */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja con el cursor desplazado arriba a la izquierda */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Caja con el cursor anclado al borde inferior */
    const $draggable3 = $("#draggable3");

    //  -----  fijar el cursor en el centro de la caja  -----
    $draggable.draggable({ cursor: "move", cursorAt: { top: 70, left: 100 } });

    //  -----  colocar el cursor 5 px fuera de la esquina superior izquierda  -----
    $draggable2.draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });

    //  -----  anclar el cursor solo al borde inferior  -----
    $draggable3.draggable({ cursorAt: { bottom: 0 } });

});
