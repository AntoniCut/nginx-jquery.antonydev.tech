/*
    *  ----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/interacciones/draggable/snap-to/script.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja que se pega a cualquier otra arrastrable */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja que se pega solo a la cabecera */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Caja que se pega al borde exterior de la cabecera */
    const $draggable3 = $("#draggable3");

    /** @type {JQuery<HTMLDivElement>} - Caja que se mueve en una rejilla de 20 px */
    const $draggable4 = $("#draggable4");

    /** @type {JQuery<HTMLDivElement>} - Caja que se mueve en una rejilla de 80 px */
    const $draggable5 = $("#draggable5");

    //  -----  pegar la caja a cualquier otro elemento arrastrable  -----
    $draggable.draggable({ snap: true });

    //  -----  pegar la caja solo a la cabecera  -----
    $draggable2.draggable({ snap: ".ui-widget-header" });

    //  -----  pegar la caja al borde exterior de la cabecera  -----
    $draggable3.draggable({
        snap: ".ui-widget-header",
        snapMode: "outer",
    });

    //  -----  mover la caja en pasos de 20 px  -----
    $draggable4.draggable({ grid: [20, 20] });

    //  -----  mover la caja en pasos de 80 px  -----
    $draggable5.draggable({ grid: [80, 80] });

});
