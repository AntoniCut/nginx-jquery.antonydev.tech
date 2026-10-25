/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  06-autocomplete-multiple.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/02-autocomplete/06-autocomplete-multiple.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** - `etiquetas de programación` */
    const etiquetas = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de varias etiquetas` */
    const $etiquetas = $("#etiquetas");

    /**
     * -----------------------------
     * -----  `partir(valor)`  -----
     * -----------------------------
     * - Separa las etiquetas escritas por comas.
     * @param {string} valor - Texto del campo.
     * @return {string[]}
     */
    const partir = (valor) => {

        //  -----  separar por comas y espacios  -----
        return valor.split(/,\s*/);
    };

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Filtra usando solo el fragmento posterior a la última coma.
     * @param {{ term: string }} peticion - Texto del campo.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `fragmento que se está escribiendo` */
        const termino = partir(peticion.term).pop() || "";

        /** - `fragmento en minúsculas` */
        const filtro = termino.toLowerCase();

        //  -----  si el fragmento está vacío, no sugerir  -----
        if (!filtro) {

            //  -----  vaciar la lista  -----
            responder([]);

            //  -----  no seguir filtrando  -----
            return;
        }

        //  -----  sugerir etiquetas que contienen el fragmento  -----
        responder(etiquetas.filter((etiqueta) => etiqueta.toLowerCase().includes(filtro)));
    };

    /**
     * ------------------------------------
     * -----  `alElegir(evento, ui)`  -----
     * ------------------------------------
     * - Sustituye el último fragmento por la etiqueta elegida.
     * @param {Event} evento - Elección en la lista.
     * @param {JQueryUI.AutocompleteUIParams} ui - Etiqueta elegida.
     * @return {boolean}
     */
    const alElegir = (evento, ui) => {

        //  -----  no dejar el valor por defecto del autocompletado  -----
        evento.preventDefault();

        /** - `etiquetas ya escritas` */
        const partes = partir(String($etiquetas.val()));

        //  -----  quitar el fragmento incompleto  -----
        partes.pop();

        //  -----  añadir la etiqueta elegida  -----
        partes.push(ui.item.value);

        //  -----  dejar una coma lista para la siguiente  -----
        partes.push("");

        //  -----  volver a componer el campo  -----
        $etiquetas.val(partes.join(", "));

        //  -----  indicar que el valor ya está escrito  -----
        return false;
    };

    //  -----  completar una etiqueta distinta tras cada coma  -----
    $etiquetas.autocomplete({
        source: alBuscar,
        focus: () => false,
        select: alElegir,
    });

});
