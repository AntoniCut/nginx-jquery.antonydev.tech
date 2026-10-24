/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  40-datepicker-range.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/40-datepicker-range.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `inicio del rango` */
    const $desde = $("#desde");

    /** @type {JQuery<HTMLInputElement>} - `final del rango` */
    const $hasta = $("#hasta");

    /**
     * ------------------------------
     * -----  `limitarHasta()`  -----
     * ------------------------------
     * - Impide elegir un final anterior al inicio.
     * @return {JQueryUI.DatepickerOptions}
     */
    const limitarHasta = () => {

        //  -----  no permitir días anteriores al inicio  -----
        return { minDate: $desde.datepicker("getDate") };
    };

    /**
     * ------------------------------
     * -----  `limitarDesde()`  -----
     * ------------------------------
     * - Impide elegir un inicio posterior al final.
     * @return {JQueryUI.DatepickerOptions}
     */
    const limitarDesde = () => {

        //  -----  no permitir días posteriores al final  -----
        return { maxDate: $hasta.datepicker("getDate") };
    };

    //  -----  abrir el inicio del rango  -----
    $desde.datepicker({
        dateFormat: "dd/mm/yy",
        beforeShow: limitarDesde,
    });

    //  -----  abrir el final del rango  -----
    $hasta.datepicker({
        dateFormat: "dd/mm/yy",
        beforeShow: limitarHasta,
    });

});
