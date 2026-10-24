/*
    *  -------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  76-tabs-ajax.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/76-tabs-ajax.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `pestañas con paneles remotos` */
    const $pestanas = $("#tabs");

    //  -----  cargar los paneles remotos al abrirlos  -----
    $pestanas.tabs();

});
