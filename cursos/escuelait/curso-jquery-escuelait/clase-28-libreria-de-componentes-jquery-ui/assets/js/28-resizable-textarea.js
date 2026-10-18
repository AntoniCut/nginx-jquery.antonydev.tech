/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  28-resizable-textarea.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/28-resizable-textarea.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLTextAreaElement>} - Área de texto que cambia de tamaño */
    const $resizable = $("#resizable");

    //  -----  mostrar solo el asa de la esquina sureste  -----
    $resizable.resizable({
        handles: "se",
    });

});
