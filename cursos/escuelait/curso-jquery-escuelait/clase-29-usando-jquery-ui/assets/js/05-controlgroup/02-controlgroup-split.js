/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-controlgroup-split.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/05-controlgroup/02-controlgroup-split.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLButtonElement>} - `botón de la acción` */
    const $ejecutar = $("#ejecutar");

    /** @type {JQuery<HTMLSelectElement>} - `menú de acciones` */
    const $accion = $("#accion");

    /** @type {JQuery<HTMLDivElement>} - `grupo del botón dividido` */
    const $dividido = $("#dividido");

    /** @type {JQuery<HTMLParagraphElement>} - `resultado de la acción` */
    const $resultado = $("#resultado");

    /**
     * ----------------------------------
     * -----  `alEjecutar(evento)`  -----
     * ----------------------------------
     * - Escribe la acción visible en el botón.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alEjecutar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  publicar la acción del botón  -----
        $resultado.text(`Acción ejecutada: ${String($ejecutar.button("option", "label"))}.`);
    };

    /**
     * ---------------------------
     * -----  `alCambiar()`  -----
     * ---------------------------
     * - Copia la opción elegida al botón.
     * @return {void}
     */
    const alCambiar = () => {

        //  -----  poner en el botón el texto de la opción  -----
        $ejecutar.button("option", "label", String($accion.val()));
    };

    //  -----  crear el botón principal  -----
    $ejecutar.button();

    //  -----  crear el menú estrecho de acciones  -----
    $accion.selectmenu({
        width: 48,
        change: alCambiar,
    });

    //  -----  unir el botón y el menú  -----
    $dividido.controlgroup();

    //  -----  ejecutar la acción visible  -----
    $ejecutar.on("click", alEjecutar);

});
