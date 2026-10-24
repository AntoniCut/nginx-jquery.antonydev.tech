/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  31-datepicker-button-bar.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/31-datepicker-button-bar.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar la barra con hoy y cerrar  -----
    $fecha.datepicker({
        showButtonPanel: true,
        currentText: "Hoy",
        closeText: "Cerrar",
    });

});
