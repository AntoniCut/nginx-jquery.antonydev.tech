/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  52-progressbar-download.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/52-progressbar-download.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `ventana de la descarga` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLDivElement>} - `barra de la descarga` */
    const $barra = $("#progressbar");

    /** @type {JQuery<HTMLParagraphElement>} - `estado de la descarga` */
    const $estado = $("#estado");

    /** @type {JQuery<HTMLButtonElement>} - `botón que inicia la descarga` */
    const $descargar = $("#descargar");

    /** - `identificador del avance` */
    let temporizador = 0;

    /**
     * -------------------------
     * -----  `avanzar()`  -----
     * -------------------------
     * - Sube la barra y se detiene al llegar al final.
     * @return {void}
     */
    const avanzar = () => {

        /** - `valor actual` */
        const actual = Number($barra.progressbar("value")) || 0;

        /** - `siguiente valor` */
        const siguiente = Math.min(100, actual + 2);

        //  -----  actualizar la barra  -----
        $barra.progressbar("value", siguiente);

        //  -----  si la descarga ha terminado, parar el avance  -----
        if (siguiente >= 100) {

            //  -----  detener el temporizador  -----
            window.clearInterval(temporizador);

            //  -----  indicar que la descarga está completa  -----
            $estado.text("Descarga completa.");
        }
    };

    /**
     * --------------------------
     * -----  `alCerrar()`  -----
     * --------------------------
     * - Detiene el avance al cerrar la ventana.
     * @return {void}
     */
    const alCerrar = () => {

        //  -----  detener el avance  -----
        window.clearInterval(temporizador);
    };

    /**
     * -----------------------------------
     * -----  `alDescargar(evento)`  -----
     * -----------------------------------
     * - Reinicia la barra y abre la ventana.
     * @param {JQuery.TriggeredEvent} evento - Clic en iniciar descarga.
     * @return {void}
     */
    const alDescargar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  volver a cero  -----
        $barra.progressbar("value", 0);

        //  -----  indicar que la descarga está en curso  -----
        $estado.text("Descargando…");

        //  -----  abrir la ventana  -----
        $dialogo.dialog("open");

        //  -----  detener un avance anterior  -----
        window.clearInterval(temporizador);

        //  -----  avanzar de forma periódica  -----
        temporizador = window.setInterval(avanzar, 80);
    };

    //  -----  preparar la barra  -----
    $barra.progressbar({ value: 0 });

    //  -----  preparar la ventana cerrada  -----
    $dialogo.dialog({
        autoOpen: false,
        modal: true,
        width: 360,
        close: alCerrar,
    });

    //  -----  iniciar la descarga al pulsar el botón  -----
    $descargar.on("click", alDescargar);

});
