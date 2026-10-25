/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-progressbar-download.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/09-progressbar/03-progressbar-download.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
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

        //  -----  si la descarga ha terminado, dejar el texto final  -----
        if (siguiente >= 100) {

            //  -----  indicar que la descarga está completa  -----
            $estado.text("Descarga completa.");

            //  -----  no programar otro avance  -----
            return;
        }

        //  -----  programar el siguiente avance  -----
        temporizador = window.setTimeout(avanzar, 80);
    };

    /**
     * --------------------------
     * -----  `alCerrar()`  -----
     * --------------------------
     * - Detiene el avance y deja la barra en carga.
     * @return {void}
     */
    const alCerrar = () => {

        //  -----  detener el avance  -----
        window.clearTimeout(temporizador);

        //  -----  volver a la carga para la próxima apertura  -----
        $barra.progressbar("value", false);

        //  -----  recuperar el texto de carga  -----
        $estado.text("Preparando…");
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

        //  -----  detener un avance anterior  -----
        window.clearTimeout(temporizador);

        //  -----  mostrar la carga antes de conocer el avance  -----
        $barra.progressbar("value", false);

        //  -----  indicar que la descarga se está preparando  -----
        $estado.text("Preparando…");

        //  -----  abrir la ventana  -----
        $dialogo.dialog("open");

        //  -----  dejar la carga un momento y luego empezar a avanzar  -----
        temporizador = window.setTimeout(() => {

            //  -----  indicar que la descarga está en curso  -----
            $estado.text("Descargando…");

            //  -----  dar el primer paso  -----
            avanzar();
        }, 2000);
    };

    //  -----  preparar la barra en carga  -----
    $barra.progressbar({ value: false });

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
