/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  02-dialog-animation.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/07-dialog/02-dialog-animation.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `ventana animada` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLButtonElement>} - `botón que abre la ventana` */
    const $abrir = $("#abrir");

    /**
     * -------------------------------
     * -----  `alAbrir(evento)`  -----
     * -------------------------------
     * - Abre la ventana.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alAbrir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  abrir la ventana  -----
        $dialogo.dialog("open");
    };

    //  -----  preparar la ventana cerrada, con animación de entrada y salida  -----
    $dialogo.dialog({
        autoOpen: false,
        width: 360,
        show: { effect: "blind", duration: 400 },
        hide: { effect: "fade", duration: 300 },
    });

    //  -----  abrir la ventana al pulsar el botón  -----
    $abrir.on("click", alAbrir);

});
