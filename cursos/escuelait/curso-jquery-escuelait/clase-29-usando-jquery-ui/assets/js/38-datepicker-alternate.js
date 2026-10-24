/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  38-datepicker-alternate.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/38-datepicker-alternate.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `fecha que ve la persona` */
    const $visible = $("#visible");

    //  -----  copiar la fecha a otro campo con otro formato  -----
    $visible.datepicker({
        dateFormat: "dd/mm/yy",
        altField: "#alterno",
        altFormat: "yy-mm-dd",
    });

});
