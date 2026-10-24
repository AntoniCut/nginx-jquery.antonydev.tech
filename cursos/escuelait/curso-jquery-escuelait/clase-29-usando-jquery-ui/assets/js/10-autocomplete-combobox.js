/*
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  10-autocomplete-combobox.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/10-autocomplete-combobox.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** @type {HTMLSelectElement} - `lista original` */
    const select = /** @type {HTMLSelectElement} */ (document.getElementById("lenguaje"));

    /** @type {JQuery<HTMLSelectElement>} - `lista original` */
    const $select = $(select);

    /** @type {HTMLLabelElement} - `etiqueta del campo` */
    const etiqueta = /** @type {HTMLLabelElement} */ (document.querySelector("label[for='lenguaje']"));

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

    //  -----  aplicar la clase del campo  -----
    entrada.className = "custom-combobox-input";

    //  -----  describir el campo  -----
    entrada.title = "Escribe o elige un lenguaje";

    //  -----  colocar el campo en el contenedor  -----
    envoltorio.append(entrada);

    //  -----  apuntar la etiqueta al campo visible  -----
    etiqueta.htmlFor = entrada.id;

    /** @type {HTMLButtonElement} - `botón que abre toda la lista` */
    const boton = document.createElement("button");

    //  -----  evitar que el botón envíe un formulario  -----
    boton.type = "button";

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

    /**
     * ---------------------------
     * -----  `opciones []`  -----
     * ---------------------------
     * - `opciones del select`
     */
    const opcionesLista = [...select.options].map((opcion) => ({
        label: opcion.text,
        value: opcion.value,
        option: opcion,
    }));

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Filtra las opciones por el texto escrito.
     * @param {{ term: string }} peticion - Texto escrito.
     * @param {(coincidencias: { label: string, value: string }[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `texto buscado en minúsculas` */
        const filtro = peticion.term.toLowerCase();

        //  -----  devolver las opciones cuyo texto contiene lo escrito  -----
        responder(opcionesLista.filter((opcion) => opcion.label.toLowerCase().includes(filtro)));
    };

    /**
     * ------------------------------------
     * -----  `alElegir(evento, ui)`  -----
     * ------------------------------------
     * - Copia la opción elegida al select y al campo.
     * @param {JQueryEventObject} evento - Elección en la lista.
     * @param {JQueryUI.AutocompleteUIParams} ui - Opción elegida.
     * @return {boolean}
     */
    const alElegir = (evento, ui) => {

        //  -----  no dejar el valor por defecto del autocompletado  -----
        evento.preventDefault();

        //  -----  escribir la etiqueta en el campo  -----
        entrada.value = ui.item.label;

        //  -----  guardar el valor en el select  -----
        select.value = ui.item.value;

        //  -----  indicar que la elección ya está aplicada  -----
        return false;
    };

    //  -----  filtrar las opciones y permitir una lista vacía  -----
    $entrada.autocomplete({
        minLength: 0,
        source: alBuscar,
        focus: alElegir,
        select: alElegir,
    });

    //  -----  mostrar el botón con el icono de desplegar  -----
    $boton.button({
        icon: "ui-icon-triangle-1-s",
        showLabel: false,
    });

    /**
     * ---------------------------------
     * -----  `alMostrar(evento)`  -----
     * ---------------------------------
     * - Abre o cierra la lista completa.
     * @param {JQuery.TriggeredEvent} evento - Pulsación del botón.
     * @return {void}
     */
    const alMostrar = (evento) => {

        //  -----  el botón no envía el formulario  -----
        evento.preventDefault();

        //  -----  si la lista está abierta, cerrarla  -----
        if ($entrada.autocomplete("widget").is(":visible")) {

            //  -----  cerrar la lista  -----
            $entrada.autocomplete("close");

            //  -----  no volver a abrirla  -----
            return;
        }

        //  -----  llevar el foco al campo  -----
        entrada.focus();

        //  -----  mostrar todas las opciones  -----
        $entrada.autocomplete("search", "");
    };

    //  -----  abrir la lista completa al pulsar el botón  -----
    $boton.on("mousedown", alMostrar);

});
