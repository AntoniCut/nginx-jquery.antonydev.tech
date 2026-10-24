/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  84-tooltip-style.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/84-tooltip-style.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLAnchorElement>} - `enlace con ayuda propia` */
    const $aviso = $("a");

    //  -----  aplicar la clase aviso a la ayuda  -----
    $aviso.tooltip({
        classes: {
            "ui-tooltip": "aviso",
        },
    });

});
