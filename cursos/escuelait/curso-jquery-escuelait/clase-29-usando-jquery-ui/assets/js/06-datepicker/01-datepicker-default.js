/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-datepicker-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/06-datepicker/01-datepicker-default.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  abrir el calendario con las opciones por defecto  -----
    $fecha.datepicker();

});
