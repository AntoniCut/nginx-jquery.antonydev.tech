/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-checkboxradio-radio.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/04-checkboxradio/04-checkboxradio-radio.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `radios de ubicación` */
    const $lugares = $("input[name=lugar]");

    /** @type {JQuery<HTMLParagraphElement>} - `ubicación elegida` */
    const $resultado = $("#resultado");

    /**
     * ---------------------------
     * -----  `alCambiar()`  -----
     * ---------------------------
     * - Escribe la ubicación marcada.
     * @return {void}
     */
    const alCambiar = () => {

        //  -----  publicar la ubicación marcada  -----
        $resultado.text(`Ubicación: ${String($lugares.filter(":checked").val())}.`);
    };

    //  -----  convertir el grupo en botones  -----
    $lugares.checkboxradio();

    //  -----  actualizar el texto al cambiar de ubicación  -----
    $lugares.on("change", alCambiar);

});
