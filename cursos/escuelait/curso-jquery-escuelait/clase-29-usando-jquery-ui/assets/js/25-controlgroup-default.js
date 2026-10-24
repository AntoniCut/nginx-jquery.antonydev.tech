/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  25-controlgroup-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/25-controlgroup-default.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `grupo horizontal` */
    const $horizontal = $(".controlgroup");

    /** @type {JQuery<HTMLDivElement>} - `grupo vertical` */
    const $vertical = $(".controlgroup-vertical");

    /** @type {JQuery<HTMLParagraphElement>} - `aviso de la reserva` */
    const $resultado = $("#resultado");

    /**
     * ----------------------------------
     * -----  `alReservar(evento)`  -----
     * ----------------------------------
     * - Escribe qué coche se reservaría.
     * @param {JQuery.TriggeredEvent} evento - Clic en Reservar.
     * @return {void}
     */
    const alReservar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        /** @type {HTMLButtonElement} - `botón pulsado` */
        const boton = /** @type {HTMLButtonElement} */ (evento.currentTarget);

        /** - `prefijo del grupo, h o v` */
        const prefijo = boton.id.slice(0, 1);

        /** - `tipo de coche elegido` */
        const tipo = String($(`#${prefijo}-tipo`).val());

        //  -----  publicar la reserva de ese grupo  -----
        $resultado.text(`Reserva de un ${tipo}.`);
    };

    //  -----  agrupar el formulario en horizontal  -----
    $horizontal.controlgroup();

    //  -----  agrupar el formulario en vertical  -----
    $vertical.controlgroup({
        direction: "vertical",
    });

    //  -----  anotar la reserva sin enviar la página  -----
    $("#h-reservar, #v-reservar").on("click", alReservar);

});
