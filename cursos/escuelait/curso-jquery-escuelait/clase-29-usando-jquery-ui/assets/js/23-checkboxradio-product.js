/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  23-checkboxradio-product.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/23-checkboxradio-product.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `opciones del producto` */
    const $entradas = $("input");

    /** @type {JQuery<HTMLParagraphElement>} - `resumen de la selección` */
    const $resumen = $("#resumen");

    /**
     * -----------------------------------
     * -----  `actualizarResumen()`  -----
     * -----------------------------------
     * - Escribe color, talla y envoltorio.
     * @return {void}
     */
    const actualizarResumen = () => {

        /** - `color elegido` */
        const color = String($("input[name=color]:checked").val());

        /** - `talla elegida` */
        const talla = String($("input[name=talla]:checked").val());

        /** - `texto del envoltorio` */
        const regalo = $("#regalo").prop("checked") ? "con envoltorio" : "sin envoltorio";

        //  -----  publicar la combinación elegida  -----
        $resumen.text(`Camiseta ${color}, talla ${talla}, ${regalo}.`);
    };

    //  -----  convertir las opciones en botones  -----
    $entradas.checkboxradio();

    //  -----  actualizar el resumen al cambiar una opción  -----
    $entradas.on("change", actualizarResumen);

});
