/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-checkboxradio-product.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/04-checkboxradio/03-checkboxradio-product.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `radios y casillas del selector` */
    const $entradas = $(".controls input");

    /** @type {JQuery<HTMLDivElement>} - `marca y forma, en horizontal` */
    const $grupos = $(".brand, .shape-bar");

    /** @type {JQuery<HTMLDivElement>} - `ajustes, en vertical` */
    const $ajustes = $(".toggles");

    /** @type {JQuery<HTMLDivElement>} - `muestra de la combinación` */
    const $muestra = $(".shape");

    /**
     * --------------------------------------
     * -----  `aplicarForma(elemento)`  -----
     * --------------------------------------
     * - Cambia la forma de la muestra.
     * @param {HTMLInputElement} elemento - Radio de forma marcado.
     * @return {void}
     */
    const aplicarForma = (elemento) => {

        /** - `clase de la forma elegida` */
        const forma = String($(elemento).val());

        //  -----  dejar solo la forma elegida  -----
        $muestra.removeClass("circle pill square rectangle").addClass(forma);
    };

    /**
     * ---------------------------------------
     * -----  `aplicarAjuste(elemento)`  -----
     * ---------------------------------------
     * - Aplica sombra, borde, fondo o imagen.
     * @param {HTMLInputElement} elemento - Casilla que ha cambiado.
     * @return {void}
     */
    const aplicarAjuste = (elemento) => {

        /** @type {JQuery<HTMLInputElement>} - `casilla pulsada` */
        const $casilla = $(elemento);

        //  -----  la sombra, el fondo y la imagen salen de la marca  -----
        if ($casilla.is(".brand-toggle")) {

            /** - `si la casilla está marcada` */
            const marcada = $casilla.is(":checked");

            /** - `valor de la marca para esta casilla` */
            const valor = $("[name='brand']:checked").attr(`data-${elemento.id}`) || "";

            //  -----  pintar o quitar esa propiedad  -----
            $muestra.css(elemento.id, marcada ? valor : "");

            //  -----  no seguir con las clases  -----
            return;
        }

        //  -----  el borde es una clase de la muestra  -----
        $muestra.toggleClass(elemento.id, $casilla.is(":checked"));
    };

    /**
     * ---------------------------------
     * -----  `actualizarMarca()`  -----
     * ---------------------------------
     * - Vuelve a pintar la muestra con la marca elegida.
     * @return {void}
     */
    const actualizarMarca = () => {

        /** @type {HTMLInputElement} - `forma marcada` */
        const forma = /** @type {HTMLInputElement} */ ($("[name='shape']:checked")[0]);

        //  -----  conservar la forma actual  -----
        aplicarForma(forma);

        //  -----  volver a aplicar cada casilla marcada  -----
        $(".toggle:checked").each((_, elemento) => {

            //  -----  pintar ese ajuste con la marca nueva  -----
            aplicarAjuste(/** @type {HTMLInputElement} */ (elemento));
        });
    };

    /**
     * --------------------------------------
     * -----  `alCambiarForma(evento)`  -----
     * --------------------------------------
     * - Actualiza la muestra al elegir otra forma.
     * @param {Event} evento - Cambio de forma.
     * @return {void}
     */
    const alCambiarForma = (evento) => {

        /** @type {HTMLInputElement} - `radio elegido` */
        const forma = /** @type {HTMLInputElement} */ (evento.target);

        //  -----  aplicar la forma  -----
        aplicarForma(forma);
    };

    /**
     * ----------------------------------
     * -----  `alAlternar(evento)`  -----
     * ----------------------------------
     * - Actualiza la muestra al marcar una casilla.
     * @param {Event} evento - Cambio de una casilla.
     * @return {void}
     */
    const alAlternar = (evento) => {

        /** @type {HTMLInputElement} - `casilla pulsada` */
        const casilla = /** @type {HTMLInputElement} */ (evento.target);

        //  -----  aplicar el ajuste  -----
        aplicarAjuste(casilla);
    };

    //  -----  convertir radios y casillas en botones  -----
    $entradas.checkboxradio();

    //  -----  agrupar marca y forma en horizontal  -----
    $grupos.controlgroup();

    //  -----  agrupar los ajustes en vertical  -----
    $ajustes.controlgroup({
        direction: "vertical",
    });

    //  -----  cambiar la forma  -----
    $("[name='shape']").on("change", alCambiarForma);

    //  -----  cambiar sombra, borde, fondo o imagen  -----
    $(".toggle").on("change", alAlternar);

    //  -----  cambiar los colores al elegir otra marca  -----
    $("[name='brand']").on("change", actualizarMarca);

    //  -----  pintar la combinación inicial  -----
    actualizarMarca();

});
