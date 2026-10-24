/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  39-datepicker-restrict.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/39-datepicker-restrict.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  limitar el calendario a un rango corto  -----
    $fecha.datepicker({
        minDate: -20,
        maxDate: "+1M +10D",
        dateFormat: "dd/mm/yy",
    });

});
