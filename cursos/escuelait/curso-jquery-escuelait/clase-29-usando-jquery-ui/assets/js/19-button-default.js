/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  19-button-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/19-button-default.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLElement>} - `controles del primer grupo` */
    const $controles = $(".widget button, .widget input, .widget a");

    /** @type {JQuery<HTMLElement>} - `controles que no deben navegar` */
    const $pulsables = $("button, input[type=submit], a");

    /**
     * --------------------------------
     * -----  `alPulsar(evento)`  -----
     * --------------------------------
     * - Evita el envío y la navegación del ejemplo.
     * @param {JQuery.TriggeredEvent} evento - Clic en un control.
     * @return {void}
     */
    const alPulsar = (evento) => {

        //  -----  no enviar el formulario ni seguir el enlace  -----
        evento.preventDefault();
    };

    //  -----  aplicar el widget al primer grupo  -----
    $controles.button();

    //  -----  quedarse en la página al pulsar  -----
    $pulsables.on("click", alPulsar);

});
