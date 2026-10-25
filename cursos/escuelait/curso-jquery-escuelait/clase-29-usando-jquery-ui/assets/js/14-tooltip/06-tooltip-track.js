/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  06-tooltip-track.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/14-tooltip/06-tooltip-track.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLAnchorElement>} - `enlace con ayuda que sigue al puntero` */
    const $mapa = $("a");

    //  -----  hacer que la ayuda siga al puntero  -----
    $mapa.tooltip({
        track: true,
    });

});
