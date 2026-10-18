/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  22-resizable-constrain-area.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/22-resizable-constrain-area.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja limitada al contenedor */
    const $resizable = $("#resizable");

    //  -----  impedir que el tamaño salga del contenedor  -----
    $resizable.resizable({
        containment: "#container",
    });

});
