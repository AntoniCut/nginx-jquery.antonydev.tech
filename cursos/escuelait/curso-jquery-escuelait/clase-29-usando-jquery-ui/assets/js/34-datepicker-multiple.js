/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  34-datepicker-multiple.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/34-datepicker-multiple.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar tres meses a la vez  -----
    $fecha.datepicker({
        numberOfMonths: 3,
        dateFormat: "dd/mm/yy",
    });

});
