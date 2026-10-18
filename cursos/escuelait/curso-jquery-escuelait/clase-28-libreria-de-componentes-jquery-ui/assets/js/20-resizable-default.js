/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  20-resizable-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/20-resizable-default.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que cambia de tamaño */
    const $resizable = $("#resizable");

    //  -----  activar el cambio de tamaño con las opciones por defecto  -----
    $resizable.resizable();

});
