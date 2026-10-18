/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  29-resizable-visual-feedback.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-28-libreria-de-componentes-jquery-ui/assets/js/29-resizable-visual-feedback.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - Caja que muestra una copia semitransparente */
    const $resizable = $("#resizable");

    //  -----  enseñar el fantasma durante el cambio de tamaño  -----
    $resizable.resizable({
        ghost: true,
    });

});
