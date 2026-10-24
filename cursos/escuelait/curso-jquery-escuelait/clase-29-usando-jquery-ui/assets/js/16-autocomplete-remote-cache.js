/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  16-autocomplete-remote-cache.js  --  /cursos/escuelait/curso-jquery-escuelait/clase-29-usando-jquery-ui/assets/js/16-autocomplete-remote-cache.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/

//  -----  iniciar la demo cuando el dom esté listo  -----
$(() => {

    /** - `ciudades para la búsqueda` */
    const ciudades = [
        "Madrid",
        "Barcelona",
        "Valencia",
        "Sevilla",
        "Zaragoza",
        "Málaga",
        "Murcia",
        "Palma",
        "Bilbao",
        "Alicante",
        "Córdoba",
        "Valladolid",
        "Vigo",
        "Gijón",
        "Granada",
        "A Coruña",
        "Vitoria",
        "Oviedo",
        "Salamanca",
        "Santander",
        "Logroño",
        "Pamplona",
        "Donostia",
        "Toledo",
    ];

    /**
     * ------------------------
     * -----  `cache {}`  -----
     * ------------------------
     * - `coincidencias ya calculadas`
     */
    const cache = {};

    /** @type {JQuery<HTMLInputElement>} - `campo de ciudad` */
    const $ciudad = $("#ciudad");

    /** @type {JQuery<HTMLParagraphElement>} - `aviso de la búsqueda` */
    const $estado = $("#estado");

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Responde desde la caché o calcula las coincidencias.
     * @param {{ term: string }} peticion - Texto escrito.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `clave de la caché` */
        const clave = peticion.term.toLowerCase();

        //  -----  si ese texto ya se buscó, usar la caché  -----
        if (cache[clave]) {

            //  -----  avisar de que la lista sale de la caché  -----
            $estado.text("Lista servida desde la caché.");

            //  -----  devolver las coincidencias guardadas  -----
            responder(cache[clave]);

            //  -----  no volver a calcular  -----
            return;
        }

        //  -----  avisar de que la búsqueda está en curso  -----
        $estado.text("Buscando…");

        //  -----  imitar la espera de un origen remoto  -----
        window.setTimeout(() => {

            /** - `ciudades que coinciden` */
            const coincidencias = ciudades.filter((ciudad) => ciudad.toLowerCase().includes(clave));

            //  -----  guardar el resultado para la próxima vez  -----
            cache[clave] = coincidencias;

            //  -----  publicar las coincidencias  -----
            responder(coincidencias);

            //  -----  avisar de que el resultado queda guardado  -----
            $estado.text("Resultado guardado en la caché.");
        }, 300);
    };

    //  -----  buscar a partir de dos letras y recordar el resultado  -----
    $ciudad.autocomplete({
        minLength: 2,
        source: alBuscar,
    });

});
