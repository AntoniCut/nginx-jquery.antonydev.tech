/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  50-progressbar-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/50-progressbar-default.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `barra de progreso` */
    const $barra = $("#progressbar");

    //  -----  marcar un 37 por ciento  -----
    $barra.progressbar({
        value: 37,
    });

});
