/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  36-datepicker-icon.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/36-datepicker-icon.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  abrir el calendario desde el botón  -----
    $fecha.datepicker({
        showOn: "button",
        buttonText: "Abrir el calendario",
        dateFormat: "dd/mm/yy",
    });

});
