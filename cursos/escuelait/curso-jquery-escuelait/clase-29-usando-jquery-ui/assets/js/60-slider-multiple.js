/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  60-slider-multiple.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/60-slider-multiple.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /**
     * -----------------------------------
     * -----  `preparar(id, valor)`  -----
     * -----------------------------------
     * - Activa un deslizador y escribe su valor.
     * @param {string} id - Id del deslizador.
     * @param {number} valor - Valor inicial.
     * @return {void}
     */
    const preparar = (id, valor) => {

        /** @type {JQuery<HTMLDivElement>} - `deslizador de esta fila` */
        const $slider = $("#" + id);

        /** @type {JQuery<HTMLSpanElement>} - `valor visible de esta fila` */
        const $valor = $("#valor-" + id);

        //  -----  escribir el valor inicial  -----
        $valor.text(valor);

        //  -----  activar el deslizador  -----
        $slider.slider({
            value: valor,
            slide: (evento, ui) => {

                //  -----  actualizar el valor visible  -----
                $valor.text(ui.value || 0);
            },
        });
    };

    //  -----  preparar el volumen  -----
    preparar("volumen", 60);

    //  -----  preparar el brillo  -----
    preparar("brillo", 40);

    //  -----  preparar el zoom  -----
    preparar("zoom", 100);

});
