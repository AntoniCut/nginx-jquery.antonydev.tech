/*
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  73-spinner-time.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/73-spinner-time.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `horas` */
    const $horas = $("#horas");

    /** @type {JQuery<HTMLInputElement>} - `minutos` */
    const $minutos = $("#minutos");

    /**
     * ------------------------------------------
     * -----  `alGirarMinutos(evento, ui)`  -----
     * ------------------------------------------
     * - Pasa la hora cuando los minutos salen de 0-59.
     * @param {JQueryEventObject} evento - Giro de los minutos.
     * @param {JQueryUI.SpinnerUIParam} ui - Minuto propuesto.
     * @return {boolean | void}
     */
    const alGirarMinutos = (evento, ui) => {

        //  -----  si los minutos pasan de 59, subir una hora  -----
        if (ui.value > 59) {

            //  -----  volver los minutos a cero  -----
            $minutos.spinner("value", 0);

            //  -----  avanzar una hora  -----
            $horas.spinner("stepUp");

            //  -----  no aplicar el minuto que se pasaba  -----
            return false;
        }

        //  -----  si los minutos bajan de 0, bajar una hora  -----
        if (ui.value < 0) {

            //  -----  poner los minutos en 59  -----
            $minutos.spinner("value", 59);

            //  -----  retroceder una hora  -----
            $horas.spinner("stepDown");

            //  -----  no aplicar el minuto que se pasaba  -----
            return false;
        }
    };

    //  -----  limitar las horas al día  -----
    $horas.spinner({ min: 0, max: 23 });

    //  -----  hacer que los minutos cambien la hora en los extremos  -----
    $minutos.spinner({
        spin: alGirarMinutos,
    });

});
