/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-dialog-modal-form.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/07-dialog/04-dialog-modal-form.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLDivElement>} - `ventana del formulario` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLButtonElement>} - `botón que abre el formulario` */
    const $abrir = $("#abrir");

    /** @type {HTMLInputElement} - `nombre de la cuenta` */
    const nombre = /** @type {HTMLInputElement} */ (document.getElementById("nombre"));

    /** @type {HTMLInputElement} - `correo de la cuenta` */
    const correo = /** @type {HTMLInputElement} */ (document.getElementById("correo"));

    /** @type {JQuery<HTMLParagraphElement>} - `aviso dentro de la ventana` */
    const $aviso = $("#aviso");

    /** @type {JQuery<HTMLParagraphElement>} - `resultado fuera de la ventana` */
    const $resultado = $("#resultado");

    /**
     * -------------------------
     * -----  `alCrear()`  -----
     * -------------------------
     * - Comprueba el formulario y, si es válido, cierra la ventana.
     * @return {void}
     */
    const alCrear = () => {

        //  -----  si falta el nombre, avisar y no cerrar  -----
        if (nombre.value.trim() === "") {

            //  -----  pedir el nombre  -----
            $aviso.text("Escribe un nombre.");

            //  -----  dejar la ventana abierta  -----
            return;
        }

        //  -----  si falta el correo, avisar y no cerrar  -----
        if (correo.value.trim() === "") {

            //  -----  pedir el correo  -----
            $aviso.text("Escribe un correo.");

            //  -----  dejar la ventana abierta  -----
            return;
        }

        //  -----  publicar la cuenta creada  -----
        $resultado.text(`Cuenta creada para ${nombre.value.trim()}.`);

        //  -----  limpiar el aviso  -----
        $aviso.text("");

        //  -----  cerrar la ventana  -----
        $dialogo.dialog("close");
    };

    /**
     * ----------------------------
     * -----  `alCancelar()`  -----
     * ----------------------------
     * - Cierra la ventana sin crear la cuenta.
     * @return {void}
     */
    const alCancelar = () => {

        //  -----  limpiar el aviso  -----
        $aviso.text("");

        //  -----  cerrar la ventana  -----
        $dialogo.dialog("close");
    };

    /**
     * -------------------------------
     * -----  `alAbrir(evento)`  -----
     * -------------------------------
     * - Abre el formulario.
     * @param {JQuery.TriggeredEvent} evento - Clic en crear cuenta.
     * @return {void}
     */
    const alAbrir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  abrir el formulario  -----
        $dialogo.dialog("open");
    };

    /**
     * --------------------------------
     * -----  `alEnviar(evento)`  -----
     * --------------------------------
     * - Evita el envío nativo y usa la misma comprobación que el botón.
     * @param {JQuery.TriggeredEvent} evento - Envío del formulario.
     * @return {void}
     */
    const alEnviar = (evento) => {

        //  -----  no enviar el formulario al navegador  -----
        evento.preventDefault();

        //  -----  comprobar los campos  -----
        alCrear();
    };

    //  -----  preparar el formulario modal  -----
    $dialogo.dialog({
        autoOpen: false,
        modal: true,
        width: 380,
        buttons: [
            { text: "Crear cuenta", click: alCrear },
            { text: "Cancelar", click: alCancelar },
        ],
    });

    //  -----  abrir el formulario al pulsar el botón  -----
    $abrir.on("click", alAbrir);

    //  -----  comprobar el formulario si se envía con el teclado  -----
    $("#cuenta").on("submit", alEnviar);

});
