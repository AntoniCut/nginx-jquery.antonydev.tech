/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  23-resizable-helper.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/23-resizable-helper.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que enseña un contorno al cambiar de tamaño */
    const $resizable = $("#resizable");

    //  -----  arrastrar el contorno en lugar de la caja  -----
    $resizable.resizable({
        helper: "ui-resizable-helper",
    });

});
