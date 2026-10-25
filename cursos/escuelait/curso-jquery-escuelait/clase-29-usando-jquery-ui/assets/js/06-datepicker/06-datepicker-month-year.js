/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  06-datepicker-month-year.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/06-datepicker/06-datepicker-month-year.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  elegir mes y año en menús  -----
    $fecha.datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "c-20:c+5",
        dateFormat: "dd/mm/yy",
    });

});
