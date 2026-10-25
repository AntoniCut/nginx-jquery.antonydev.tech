/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  05-autocomplete-custom-data.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/05-autocomplete-custom-data.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /**
     * ----------------------------
     * -----  `proyectos []`  -----
     * ----------------------------
     * - `proyectos con descripción`
     */
    const proyectos = [
        { label: "jQuery", desc: "Escribe menos y haz más" },
        { label: "jQuery UI", desc: "Interacciones, widgets y efectos" },
        { label: "Sizzle", desc: "Motor de selectores" },
        { label: "QUnit", desc: "Pruebas de JavaScript" },
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de proyecto` */
    const $proyecto = $("#proyecto");

    //  -----  sugerir los proyectos por su nombre  -----
    $proyecto.autocomplete({
        source: proyectos,
    });

    /** @type {JQueryUI.AutocompleteCustomData} - `instancia del autocompletado` */
    const instancia = /** @type {JQueryUI.AutocompleteCustomData} */ (
        $proyecto.autocomplete("instance")
    );

    //  -----  pintar el nombre y la descripción de cada proyecto  -----
    instancia._renderItem = (ul, item) => {

        /** @type {HTMLLIElement} - `fila de la sugerencia` */
        const fila = document.createElement("li");

        /** @type {HTMLDivElement} - `contenido de la fila` */
        const caja = document.createElement("div");

        /** @type {HTMLElement} - `nombre del proyecto` */
        const titulo = document.createElement("strong");

        /** @type {HTMLSpanElement} - `descripción del proyecto` */
        const detalle = document.createElement("span");

        //  -----  escribir el nombre  -----
        titulo.textContent = item.label;

        //  -----  marcar la descripción  -----
        detalle.className = "proyecto-desc";

        //  -----  escribir la descripción  -----
        detalle.textContent = item.desc;

        //  -----  montar la fila  -----
        caja.append(titulo, detalle);

        //  -----  guardar la fila  -----
        fila.append(caja);

        //  -----  añadir la fila al menú  -----
        ul[0].append(fila);

        //  -----  devolver la fila como objeto jQuery  -----
        return $(fila);
    };

});
