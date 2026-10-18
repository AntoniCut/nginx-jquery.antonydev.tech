/*
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  script.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-jquery-ui/interacciones/draggable/scroll/script.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
*/


//  -----  iniciar la demo cuando el dom esté listo  -----
$(function () {

    /** @type {JQuery<HTMLDivElement>} - Arrastre con scroll automático por defecto */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Arrastre con mayor sensibilidad de scroll */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Arrastre con mayor velocidad de scroll */
    const $draggable3 = $("#draggable3");

    //  -----  activar el scroll automático con la sensibilidad por defecto  -----
    $draggable.draggable({ scroll: true });

    //  -----  activar el scroll cuando el cursor está a 100 px del borde  -----
    $draggable2.draggable({ scroll: true, scrollSensitivity: 100 });

    //  -----  activar el scroll a mayor velocidad  -----
    $draggable3.draggable({ scroll: true, scrollSpeed: 100 });

});
