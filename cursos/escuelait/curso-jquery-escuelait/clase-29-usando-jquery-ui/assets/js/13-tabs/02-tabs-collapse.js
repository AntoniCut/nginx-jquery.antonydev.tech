/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-tabs-collapse.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/13-tabs/02-tabs-collapse.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `pestañas que se pueden cerrar` */
    const $pestanas = $("#tabs");

    //  -----  permitir cerrar la pestaña activa  -----
    $pestanas.tabs({
        collapsible: true,
    });

});
