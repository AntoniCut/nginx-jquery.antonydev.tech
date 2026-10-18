/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  25-resizable-aspect-ratio.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/25-resizable-aspect-ratio.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que conserva la proporción 16:9 */
    const $resizable = $("#resizable");

    //  -----  mantener la proporción al cambiar el tamaño  -----
    $resizable.resizable({
        aspectRatio: 16 / 9,
    });

});
