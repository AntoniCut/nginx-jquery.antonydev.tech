/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  35-datepicker-format.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/35-datepicker-format.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `fecha corta` */
    const $corto = $("#corto");

    /** @type {JQuery<HTMLInputElement>} - `fecha larga` */
    const $largo = $("#largo");

    //  -----  mostrar día, mes y año en cifras  -----
    $corto.datepicker({
        dateFormat: "dd/mm/yy",
        appendText: " (dd/mm/aa)",
    });

    //  -----  mostrar el día y el mes con su nombre  -----
    $largo.datepicker({
        dateFormat: "DD, d 'de' MM 'de' yy",
    });

});
