/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  04-autocomplete-combobox.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/04-autocomplete-combobox.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {HTMLSelectElement} - `lista original` */
    const select = /** @type {HTMLSelectElement} */ (document.getElementById("lenguaje"));

    /** @type {HTMLLabelElement} - `etiqueta del campo` */
    const etiqueta = /** @type {HTMLLabelElement} */ (document.querySelector("label[for='lenguaje']"));

    /** @type {HTMLButtonElement} - `botón que enseña el select` */
    const mostrarSelect = /** @type {HTMLButtonElement} */ (document.getElementById("mostrar-select"));

    /** @type {HTMLSpanElement} - `contenedor del campo y del botón` */
    const envoltorio = document.createElement("span");

    //  -----  marcar el contenedor de la lista combinada  -----
    envoltorio.className = "custom-combobox";

    //  -----  colocar el contenedor detrás del select  -----
    select.insertAdjacentElement("afterend", envoltorio);

    //  -----  ocultar el select nativo  -----
    select.hidden = true;

    /** @type {HTMLInputElement} - `campo donde se escribe` */
    const entrada = document.createElement("input");

    //  -----  usar un campo de texto  -----
    entrada.type = "text";

    //  -----  identificar el campo para la etiqueta  -----
    entrada.id = "lenguaje-texto";

    //  -----  unir el campo con el botón por la izquierda  -----
    entrada.className = "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left";

    //  -----  dejar el título libre para el aviso de error  -----
    entrada.title = "";

    //  -----  colocar el campo en el contenedor  -----
    envoltorio.append(entrada);

    //  -----  apuntar la etiqueta al campo visible  -----
    etiqueta.htmlFor = entrada.id;

    /** @type {HTMLButtonElement} - `botón que abre toda la lista` */
    const boton = document.createElement("button");

    //  -----  evitar que el botón envíe un formulario  -----
    boton.type = "button";

    //  -----  no detener el tabulador en el botón  -----
    boton.tabIndex = -1;

    //  -----  describir el botón  -----
    boton.title = "Mostrar todos";

    //  -----  dejar el texto para el lector de pantalla  -----
    boton.textContent = "Mostrar todos";

    //  -----  colocar el botón junto al campo  -----
    envoltorio.append(boton);

    /** @type {JQuery<HTMLInputElement>} - `campo donde se escribe` */
    const $entrada = $(entrada);

    /** @type {JQuery<HTMLButtonElement>} - `botón de la lista` */
    const $boton = $(boton);

    /** @type {JQuery<HTMLButtonElement>} - `botón que enseña el select` */
    const $mostrarSelect = $(mostrarSelect);

    /** - `si la lista ya estaba abierta al pulsar el botón` */
    let listaAbierta = false;

    /**
     * ---------------------------
     * -----  `opciones []`  -----
     * ---------------------------
     * - `opciones del select`
     */
    const opcionesLista = [...select.options].map((opcion) => ({
        label: opcion.text,
        value: opcion.text,
        option: opcion,
    }));

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Filtra las opciones por el texto escrito.
     * @param {{ term: string }} peticion - Texto escrito.
     * @param {(coincidencias: { label: string, value: string, option: HTMLOptionElement }[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `texto buscado en minúsculas` */
        const filtro = peticion.term.toLowerCase();

        //  -----  devolver las opciones con valor cuyo texto contiene lo escrito  -----
        responder(opcionesLista.filter((opcion) => opcion.option.value !== "" && opcion.label.toLowerCase().includes(filtro)));
    };

    /**
     * ------------------------------------
     * -----  `alElegir(evento, ui)`  -----
     * ------------------------------------
     * - Marca en el select la opción elegida.
     * @param {Event} evento - Elección en la lista.
     * @param {{ item: { option: HTMLOptionElement } }} ui - Opción elegida.
     * @return {void}
     */
    const alElegir = (evento, ui) => {

        //  -----  la elección ya queda escrita por el autocompletado  -----
        evento.preventDefault();

        //  -----  escribir el nombre en el campo  -----
        entrada.value = ui.item.option.text;

        //  -----  marcar la opción en el select  -----
        ui.item.option.selected = true;
    };

    /**
     * -------------------------------------
     * -----  `alCambiar(evento, ui)`  -----
     * -------------------------------------
     * - Vacía el campo si el texto no coincide con ninguna opción.
     * @param {Event} evento - Salida del campo.
     * @param {{ item?: { option: HTMLOptionElement } }} ui - Opción elegida, si la hay.
     * @return {void}
     */
    const alCambiar = (evento, ui) => {

        //  -----  el cambio no navega  -----
        evento.preventDefault();

        //  -----  no corregir una opción elegida en la lista  -----
        if (ui.item) {

            //  -----  conservar la elección  -----
            return;
        }

        /** - `texto escrito en minúsculas` */
        const escrito = entrada.value.toLowerCase();

        /** - `opción con el mismo texto` */
        const coincidencia = opcionesLista.find((opcion) => opcion.option.value !== "" && opcion.label.toLowerCase() === escrito);

        //  -----  aceptar el texto que coincide sin distinguir mayúsculas  -----
        if (coincidencia) {

            //  -----  marcar esa opción en el select  -----
            coincidencia.option.selected = true;

            //  -----  conservar el texto  -----
            return;
        }

        //  -----  quitar el texto que no existe  -----
        entrada.value = "";

        //  -----  volver a la opción vacía  -----
        select.value = "";

        //  -----  explicar el fallo en la ayuda  -----
        entrada.title = "Ese texto no coincide con ninguna opción";

        //  -----  mostrar la ayuda  -----
        $entrada.tooltip("open");

        //  -----  cerrar la ayuda al cabo de un momento  -----
        window.setTimeout(() => {

            //  -----  ocultar la ayuda  -----
            $entrada.tooltip("close");

            //  -----  dejar el título libre  -----
            entrada.title = "";
        }, 2500);
    };

    //  -----  filtrar las opciones y avisar si el texto no existe  -----
    $entrada.autocomplete({
        delay: 0,
        minLength: 0,
        source: alBuscar,
        select: alElegir,
        change: alCambiar,
    });

    //  -----  preparar la ayuda del campo  -----
    $entrada.tooltip({
        classes: {
            "ui-tooltip": "ui-state-highlight",
        },
    });

    //  -----  mostrar el botón con el icono de desplegar  -----
    $boton.button({
        icon: "ui-icon-triangle-1-s",
        showLabel: false,
    });

    //  -----  unir el botón con el campo por la derecha  -----
    boton.classList.remove("ui-corner-all");

    //  -----  marcar el botón de la lista  -----
    boton.classList.add("custom-combobox-toggle", "ui-corner-right");

    //  -----  mostrar la ayuda del botón  -----
    $boton.tooltip();

    /**
     * ----------------------------
     * -----  `alRecordar()`  -----
     * ----------------------------
     * - Recuerda si la lista estaba abierta antes del clic.
     * @return {void}
     */
    const alRecordar = () => {

        //  -----  guardar el estado de la lista  -----
        listaAbierta = $entrada.autocomplete("widget").is(":visible");
    };

    /**
     * ---------------------------------
     * -----  `alMostrar(evento)`  -----
     * ---------------------------------
     * - Abre la lista completa si estaba cerrada.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alMostrar = (evento) => {

        //  -----  el botón no envía el formulario  -----
        evento.preventDefault();

        //  -----  llevar el foco al campo  -----
        entrada.focus();

        //  -----  si ya estaba abierta, el foco la cierra  -----
        if (listaAbierta) {

            //  -----  no volver a abrirla  -----
            return;
        }

        //  -----  mostrar todas las opciones  -----
        $entrada.autocomplete("search", "");
    };

    //  -----  anotar si la lista está abierta  -----
    $boton.on("mousedown", alRecordar);

    //  -----  abrir la lista completa al pulsar el botón  -----
    $boton.on("click", alMostrar);

    /**
     * ----------------------------------------
     * -----  `alAlternarSelect(evento)`  -----
     * ----------------------------------------
     * - Muestra u oculta el select original.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alAlternarSelect = (evento) => {

        //  -----  el botón no envía el formulario  -----
        evento.preventDefault();

        //  -----  alternar la lista original  -----
        select.hidden = !select.hidden;
    };

    //  -----  enseñar el select al pulsar el botón  -----
    $mostrarSelect.on("click", alAlternarSelect);

});
