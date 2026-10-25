/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  14-datepicker-week.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/06-datepicker/14-datepicker-week.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar el número de semana  -----
    $fecha.datepicker({
        showWeek: true,
        firstDay: 1,
        dateFormat: "dd/mm/yy",
    });

});
