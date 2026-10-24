/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  32-datepicker-inline.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/32-datepicker-inline.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `calendario visible` */
    const $fecha = $("#datepicker");

    /** @type {JQuery<HTMLParagraphElement>} - `fecha elegida` */
    const $resultado = $("#resultado");

    /**
     * -------------------------------
     * -----  `alElegir(fecha)`  -----
     * -------------------------------
     * - Escribe la fecha elegida.
     * @param {string} fecha - Fecha en el formato del calendario.
     * @return {void}
     */
    const alElegir = (fecha) => {

        //  -----  publicar la fecha elegida  -----
        $resultado.text(`Fecha elegida: ${fecha}.`);
    };

    //  -----  mostrar el calendario en la página  -----
    $fecha.datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: alElegir,
    });

});
