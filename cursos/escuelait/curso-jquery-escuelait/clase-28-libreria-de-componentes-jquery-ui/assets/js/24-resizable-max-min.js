/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  24-resizable-max-min.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/24-resizable-max-min.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja con tamaño mínimo y máximo */
    const $resizable = $("#resizable");

    //  -----  limitar el ancho y el alto  -----
    $resizable.resizable({
        maxHeight: 250,
        maxWidth: 350,
        minHeight: 150,
        minWidth: 200,
    });

});
