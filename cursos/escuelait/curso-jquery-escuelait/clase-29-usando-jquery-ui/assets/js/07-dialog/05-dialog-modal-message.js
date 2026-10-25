/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  05-dialog-modal-message.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/07-dialog/05-dialog-modal-message.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `ventana del mensaje` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLButtonElement>} - `botón que abre el mensaje` */
    const $abrir = $("#abrir");

    /**
     * ---------------------------
     * -----  `alAceptar()`  -----
     * ---------------------------
     * - Cierra el mensaje.
     * @return {void}
     */
    const alAceptar = () => {

        //  -----  cerrar el mensaje  -----
        $dialogo.dialog("close");
    };

    /**
     * -------------------------------
     * -----  `alAbrir(evento)`  -----
     * -------------------------------
     * - Abre el mensaje.
     * @param {JQuery.TriggeredEvent} evento - Clic en mostrar mensaje.
     * @return {void}
     */
    const alAbrir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  abrir el mensaje  -----
        $dialogo.dialog("open");
    };

    //  -----  preparar el mensaje modal  -----
    $dialogo.dialog({
        autoOpen: false,
        modal: true,
        width: 340,
        buttons: [{ text: "Aceptar", click: alAceptar }],
    });

    //  -----  mostrar el mensaje al pulsar el botón  -----
    $abrir.on("click", alAbrir);

});
