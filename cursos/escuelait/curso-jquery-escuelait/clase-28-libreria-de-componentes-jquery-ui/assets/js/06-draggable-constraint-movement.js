/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  06-draggable-constraint-movement.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/06-draggable-constraint-movement.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Caja limitada al eje vertical */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja limitada al eje horizontal */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Caja limitada al interior del contenedor */
    const $draggable3 = $("#draggable3");

    /** @type {JQuery<HTMLParagraphElement>} - Texto limitado a su elemento padre */
    const $draggable4 = $("#draggable4");

    //  -----  limitar el arrastre al eje vertical  -----
    $draggable.draggable({ axis: "y" });

    //  -----  limitar el arrastre al eje horizontal  -----
    $draggable2.draggable({ axis: "x" });

    //  -----  limitar el arrastre al interior de la caja  -----
    $draggable3.draggable({ containment: "#containment-wrapper", scroll: false });

    //  -----  limitar el arrastre al elemento padre  -----
    $draggable4.draggable({ containment: "parent" });

});
