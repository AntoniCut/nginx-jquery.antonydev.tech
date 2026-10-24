/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  42-dialog-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/42-dialog-default.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `ventana de la demo` */
    const $dialogo = $("#dialog");

    //  -----  abrir la ventana con las opciones por defecto  -----
    $dialogo.dialog({
        width: 360,
    });

});
