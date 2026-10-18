/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  21-resizable-animate.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/21-resizable-animate.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que anima el cambio de tamaño */
    const $resizable = $("#resizable");

    /** - `true si el usuario pide menos movimiento` */
    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    //  -----  animar hasta el tamaño nuevo al soltar  -----
    $resizable.resizable({
        animate: true,
        animateDuration: movimientoReducido ? 0 : "slow",
    });

});
