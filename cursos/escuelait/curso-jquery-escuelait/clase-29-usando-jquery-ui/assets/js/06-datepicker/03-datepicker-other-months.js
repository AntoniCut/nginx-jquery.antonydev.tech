/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-datepicker-other-months.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/06-datepicker/03-datepicker-other-months.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar y permitir elegir los días de los meses contiguos  -----
    $fecha.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
    });

});
