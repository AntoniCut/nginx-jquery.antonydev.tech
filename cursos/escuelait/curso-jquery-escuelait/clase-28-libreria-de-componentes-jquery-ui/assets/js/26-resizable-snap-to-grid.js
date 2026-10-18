/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  26-resizable-snap-to-grid.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/26-resizable-snap-to-grid.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que crece de 50 en 50 píxeles */
    const $resizable = $("#resizable");

    //  -----  ajustar el tamaño a una rejilla de 50 píxeles  -----
    $resizable.resizable({
        grid: 50,
    });

});
