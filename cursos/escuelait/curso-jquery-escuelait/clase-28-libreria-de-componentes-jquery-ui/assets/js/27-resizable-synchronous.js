/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  27-resizable-synchronous.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/27-resizable-synchronous.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que arrastra el tamaño de la otra */
    const $resizable = $("#resizable");

    /** @type {JQuery<HTMLDivElement>} - Caja que cambia de tamaño a la vez */
    const $also = $("#also");

    //  -----  cambiar las dos cajas al arrastrar la primera  -----
    $resizable.resizable({
        alsoResize: "#also",
    });

    //  -----  permitir cambiar la segunda caja por separado  -----
    $also.resizable();

});
