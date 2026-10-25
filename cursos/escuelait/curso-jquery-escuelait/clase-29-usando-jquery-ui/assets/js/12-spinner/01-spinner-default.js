/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  01-spinner-default.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/12-spinner/01-spinner-default.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLInputElement>} - `control numérico` */
    const $spinner = $("#spinner");

    /** @type {JQuery<HTMLButtonElement>} - `botones de la demo` */
    const $botones = $(".acciones button");

    /** @type {JQuery<HTMLParagraphElement>} - `valor anunciado` */
    const $resultado = $("#resultado");

    /**
     * ----------------------------------
     * -----  `alAlternar(evento)`  -----
     * ----------------------------------
     * - Activa o desactiva el control.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alAlternar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  si está desactivado, activarlo  -----
        if ($spinner.spinner("option", "disabled")) {

            //  -----  activar el control  -----
            $spinner.spinner("enable");

            //  -----  anunciar que está activo  -----
            $resultado.text("Control activo.");

            //  -----  no seguir  -----
            return;
        }

        //  -----  desactivar el control  -----
        $spinner.spinner("disable");

        //  -----  anunciar que está desactivado  -----
        $resultado.text("Control desactivado.");
    };

    /**
     * --------------------------------
     * -----  `alWidget(evento)`  -----
     * --------------------------------
     * - Quita el widget o lo vuelve a crear.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alWidget = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  si el widget existe, quitarlo  -----
        if ($spinner.spinner("instance")) {

            //  -----  volver al campo de texto  -----
            $spinner.spinner("destroy");

            //  -----  anunciar que el widget se ha quitado  -----
            $resultado.text("Widget quitado.");

            //  -----  no volver a crearlo  -----
            return;
        }

        //  -----  crear de nuevo el control  -----
        $spinner.spinner();

        //  -----  anunciar que el widget vuelve a existir  -----
        $resultado.text("Widget creado.");
    };

    /**
     * ------------------------------
     * -----  `alLeer(evento)`  -----
     * ------------------------------
     * - Escribe el valor actual.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alLeer = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  si el widget no existe, avisar  -----
        if (!$spinner.spinner("instance")) {

            //  -----  indicar que no hay control  -----
            $resultado.text("No hay widget.");

            //  -----  no leer un valor  -----
            return;
        }

        //  -----  publicar el valor  -----
        $resultado.text(`Valor: ${$spinner.spinner("value")}.`);
    };

    /**
     * -------------------------------
     * -----  `alFijar(evento)`  -----
     * -------------------------------
     * - Pone el valor en 5.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alFijar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  si el widget no existe, avisar  -----
        if (!$spinner.spinner("instance")) {

            //  -----  indicar que no hay control  -----
            $resultado.text("No hay widget.");

            //  -----  no fijar el valor  -----
            return;
        }

        //  -----  fijar el valor en 5  -----
        $spinner.spinner("value", 5);

        //  -----  publicar el valor fijado  -----
        $resultado.text("Valor fijado en 5.");
    };

    //  -----  crear el control numérico  -----
    $spinner.spinner();

    //  -----  aplicar el tema a los botones  -----
    $botones.button();

    //  -----  activar o desactivar el control  -----
    $("#alternar").on("click", alAlternar);

    //  -----  quitar o crear el widget  -----
    $("#widget").on("click", alWidget);

    //  -----  leer el valor  -----
    $("#leer").on("click", alLeer);

    //  -----  fijar el valor en 5  -----
    $("#fijar").on("click", alFijar);

});
