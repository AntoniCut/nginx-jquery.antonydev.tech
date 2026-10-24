/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  30-datepicker-other-months.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/30-datepicker-other-months.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `calendario que muestra los otros días` */
    const $ver = $("#ver");

    /** @type {JQuery<HTMLInputElement>} - `calendario que permite elegir esos días` */
    const $elegir = $("#elegir");

    //  -----  mostrar los días de los meses contiguos  -----
    $ver.datepicker({ showOtherMonths: true });

    //  -----  mostrar y permitir elegir los días de los meses contiguos  -----
    $elegir.datepicker({ showOtherMonths: true, selectOtherMonths: true });

});
