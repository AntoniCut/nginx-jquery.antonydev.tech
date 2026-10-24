/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  87-tooltip-player.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/87-tooltip-player.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {HTMLDivElement} - `línea de tiempo` */
    const linea = /** @type {HTMLDivElement} */ (document.getElementById("linea"));

    /** @type {JQuery<HTMLDivElement>} - `línea de tiempo` */
    const $linea = $(linea);

    /** @type {JQuery<HTMLParagraphElement>} - `minuto visible` */
    const $marca = $("#marca");

    /**
     * -----------------------------------
     * -----  `formatear(segundos)`  -----
     * -----------------------------------
     * - Pasa los segundos a minutos y segundos.
     * @param {number} segundos - Segundo dentro de los tres minutos.
     * @return {string}
     */
    const formatear = (segundos) => {

        /** - `minutos enteros` */
        const minutos = Math.floor(segundos / 60);

        /** - `segundos que sobran` */
        const resto = segundos % 60;

        //  -----  componer minutos y segundos  -----
        return `${minutos}:${String(resto).padStart(2, "0")}`;
    };

    /**
     * -------------------------------
     * -----  `alMover(evento)`  -----
     * -------------------------------
     * - Calcula el minuto según la posición del puntero.
     * @param {JQuery.TriggeredEvent} evento - Movimiento sobre la línea.
     * @return {void}
     */
    const alMover = (evento) => {

        /** @type {DOMRect} - `caja de la línea` */
        const caja = linea.getBoundingClientRect();

        /** - `proporción del puntero dentro de la línea` */
        const ratio = Math.min(1, Math.max(0, (evento.clientX - caja.left) / caja.width));

        /** - `segundo correspondiente` */
        const segundos = Math.round(ratio * 180);

        /** - `minuto formateado` */
        const marca = formatear(segundos);

        //  -----  escribir el minuto bajo la línea  -----
        $marca.text(marca);

        //  -----  actualizar el título de la línea  -----
        linea.title = marca;

        /** @type {HTMLElement | null} - `ayuda abierta` */
        const ayuda = document.querySelector(".ui-tooltip");

        //  -----  si la ayuda está abierta, escribir el minuto  -----
        if (ayuda) {

            //  -----  actualizar el texto de la ayuda  -----
            ayuda.textContent = marca;
        }
    };

    //  -----  mostrar la ayuda siguiendo el puntero  -----
    $linea.tooltip({
        track: true,
        content: () => $marca.text() || "0:00",
    });

    //  -----  recalcular el minuto al mover el puntero  -----
    $linea.on("mousemove", alMover);

});
